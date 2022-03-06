<template>
    <div :class="overlay_classes" v-show="is_open" v-on:click="_onOverlayClick">
        <div :class="modal_classes" :style="modal_style">
            <div class="sweet-box-actions">
                <!-- Custom Actions -->
                <slot name="box-action"></slot>

                <!-- Close Button -->
                <div class="sweet-action-close" v-on:click="close" v-if="!hideCloseButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#292c34" />
                    </svg>
                </div>
            </div>

            <!-- Title: Housing the title and tabs, if no title is present -->
            <!-- <div class="sweet-title" v-if="has_title || has_tabs"> -->
            <!-- Tabs but no title -->
            <!-- <template v-if="has_tabs && !has_title">
                    <ul class="sweet-modal-tabs">
                        <li v-for="tab in tabs" :class="_getClassesForTab(tab)">
                            <a href="#" v-on:click.prevent="_changeTab(tab)">
                                <div class="sweet-modal-valign">
                                    <span v-if="tab.icon" v-html="tab.icon" class="sweet-modal-tab-icon" />
                                    <span class="sweet-modal-tab-title">{{ tab.title }}</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </template> -->

            <!-- Title -->
            <!-- <template v-if="has_title">
                    <h2 v-if="title" v-html="title"></h2>
                    <slot name="title"></slot>
                </template> -->
            <!-- </div> -->

            <!-- Tabs: If title AND tabs are present -->
            <!-- <ul class="sweet-modal-tabs" v-if="has_title && has_tabs">
                <li v-for="tab in tabs" :class="_getClassesForTab(tab)">
                    <a href="#" v-on:click.prevent="_changeTab(tab)">
                        <div class="sweet-modal-valign">
                            <span v-if="tab.icon" v-html="tab.icon" class="sweet-modal-tab-icon" />
                            <span class="sweet-modal-tab-title">{{ tab.title }}</span>
                        </div>
                    </a>
                </li>
            </ul> -->

            <!-- Content: Wrapper -->
            <div class="sweet-content" ref="content">
                <!-- Icon: Error -->
                <div class="sweet-modal-icon sweet-modal-error" v-if="icon == 'error'" ref="icon_error">
                    <span class="sweet-modal-x-mark">
                        <span class="sweet-modal-line sweet-modal-left"></span>
                        <span class="sweet-modal-line sweet-modal-right"></span>
                    </span>
                </div>

                <!-- Icon: Warning -->
                <div class="sweet-modal-icon sweet-modal-warning" v-if="icon == 'warning'" ref="icon_warning">
                    <span class="sweet-modal-body"></span>
                    <span class="sweet-modal-dot"></span>
                </div>

                <!-- Icon: Info -->
                <div class="sweet-modal-icon sweet-modal-info" v-if="icon == 'info'" ref="icon_info"></div>

                <!-- Icon: Success -->
                <div class="sweet-modal-icon sweet-modal-success" v-if="icon == 'success'" ref="icon_success">
                    <span class="sweet-modal-line sweet-modal-tip"></span>
                    <span class="sweet-modal-line sweet-modal-long"></span>
                    <div class="sweet-modal-placeholder"></div>
                    <div class="sweet-modal-fix"></div>
                </div>

                <!-- Actual Content -->
                <div class="sweet-content-content" v-if="$slots.default">
                    <slot></slot>
                </div>
            </div>

            <!-- Buttons -->
            <div class="sweet-buttons" v-if="$slots.button">
                <slot name="button"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SweetModal',

    props: {
        title: {
            type: String,
            required: false,
            default: ''
        },

        overlayTheme: {
            type: String,
            required: false,
            default: 'light'
        },

        modalTheme: {
            type: String,
            required: false,
            default: 'light'
        },

        blocking: {
            type: Boolean,
            required: false,
            default: false
        },

        pulseOnBlock: {
            type: Boolean,
            required: false,
            default: true
        },

        icon: {
            type: String,
            required: false,
            default: ''
        },

        hideCloseButton: {
            type: Boolean,
            required: false,
            default: false
        },

        enableMobileFullscreen: {
            type: Boolean,
            required: false,
            default: true
        },

        width: {
            type: [Number, String],
            required: false,
            default: null
        }
    },

    mounted() {
        // this.tabs = this.$children.filter(c => c.cmpName && c.cmpName == 'tab')

        if (this.has_tabs) {
            this.currentTab = this._changeTab(this.tabs[0])
        }

        document.addEventListener('keyup', this._onDocumentKeyup)
    },

    beforeDestroy() {
        this._unlockBody()
        document.removeEventListener('keyup', this._onDocumentKeyup)
    },

    data() {
        return {
            visible: false,
            is_open: false,
            is_bouncing: false,
            tabs: [],

            backups: {
                body: {
                    height: null,
                    overflow: null
                }
            }
        }
    },

    computed: {
        has_title() {
            return this.title || this.$slots.title
        },

        has_tabs() {
            return this.tabs.length > 0
        },

        has_content() {
            return this.$slots.default
        },

        current_tab() {
            return this.tabs.filter(t => t.active === true)[0]
        },

        overlay_classes() {
            return [
                'sweet-modal-overlay',
                'theme-' + this.overlayTheme,
                'sweet-modal-clickable',
                {
                    'is-visible': this.visible,
                    blocking: this.blocking
                }
            ]
        },

        modal_classes() {
            return [
                'sweet-modal',
                'theme-' + this.modalTheme,
                {
                    'has-title': this.has_title,
                    'has-tabs': this.has_tabs,
                    'has-content': this.has_content,
                    'has-icon': this.icon,
                    'is-mobile-fullscreen': this.enableMobileFullscreen,
                    'is-visible': this.visible,
                    'is-alert': (this.icon && !this.has_tabs) || (!this.icon && !this.title && !this.$slots.title),
                    bounce: this.is_bouncing
                }
            ]
        },

        modal_style() {
            let width = this.width
            let maxWidth = null

            if (width !== null) {
                if (Number(width) == width) {
                    width = width + 'px'
                }

                maxWidth = 'none'
            }

            return {
                width,
                maxWidth
            }
        }
    },

    methods: {
        /**
         * Open the dialog
         * Emits an event 'open'
         *
         * @param tabId string     Optional id or index of initial tab element.
         */
        open(tabId = null) {
            if (tabId && this.has_tabs) {
                // Find tab with wanted id.
                let openingTabs = this.tabs.filter(tab => {
                    return tab.id === tabId
                })
                if (openingTabs.length > 0) {
                    // Set current tab to first match.
                    this.currentTab = this._changeTab(openingTabs[0])
                } else {
                    // Try opening index instead of id as an alternative.
                    let openingTab = this.tabs[tabId]
                    if (openingTab) {
                        this.currentTab = this._changeTab(openingTab)
                    }
                }
            }

            this.is_open = true
            this._lockBody()
            this._animateIcon()

            setTimeout(() => (this.visible = true), 30)
            this.$emit('open')
        },

        /**
         * Close the dialog
         * Emits an event 'close'
         */
        close() {
            this.visible = false
            this._unlockBody()

            setTimeout(() => (this.is_open = false), 300)
            this.$emit('close')
        },

        /**
         * Bounce the modal.
         */
        bounce() {
            this.is_bouncing = true

            setTimeout(() => (this.is_bouncing = false), 330)
        },

        /**********************
			    INTERNAL METHODS
			 **********************/

        _lockBody() {
            this.backups.body.height = document.body.style.height
            this.backups.body.overflow = document.body.style.overflow

            document.body.style.height = '100%'
            document.body.style.overflow = 'hidden'
        },

        _unlockBody() {
            document.body.style.height = this.backups.body.height
            document.body.style.overflow = this.backups.body.overflow
        },

        _onOverlayClick(event) {
            if (!event.target.classList || event.target.classList.contains('sweet-modal-clickable')) {
                if (this.blocking) {
                    if (this.pulseOnBlock) this.bounce()
                } else {
                    this.close()
                }
            }
        },

        _onDocumentKeyup(event) {
            if (event.keyCode == 27) {
                if (this.blocking) {
                    if (this.pulseOnBlock) this.bounce()
                } else {
                    this.close()
                }
            }
        },

        _changeTab(tab) {
            this.tabs.map(t => (t.active = t == tab))
            this.currentTab = tab
        },

        _getClassesForTab(tab) {
            return [
                'sweet-modal-tab',

                {
                    active: tab.active,
                    disabled: tab.disabled
                }
            ]
        },

        _animateIcon() {
            if (!this.icon) return

            switch (this.icon) {
                case 'success':
                    setTimeout(() => {
                        this._applyClasses(this.$refs.icon_success, {
                            '': ['animate'],
                            '.sweet-modal-tip': ['animateSuccessTip'],
                            '.sweet-modal-long': ['animateSuccessLong']
                        })
                    }, 80)

                    break

                case 'warning':
                    this._applyClasses(this.$refs.icon_warning, {
                        '': ['pulseWarning'],
                        '.sweet-modal-body': ['pulseWarningIns'],
                        '.sweet-modal-dot': ['pulseWarningIns']
                    })

                    break

                case 'error':
                    setTimeout(() => {
                        this._applyClasses(this.$refs.icon_error, {
                            '': ['animateErrorIcon'],
                            '.sweet-modal-x-mark': ['animateXMark']
                        })
                    }, 80)

                    break
            }
        },

        /**
         * Apply classes from the classMap to $ref or children of $ref, a native
         * DOMElement.
         *
         * ClassMap:
         * {
         *     'selector': [ 'class1', 'class2', ... ]
         * }
         *
         * Empty Selector selects $ref.
         *
         * @param DOMNode $ref     Element to apply classes to or children of that element
         * @param Object  classMap Class Map which elements get which classes (see doc)
         */
        _applyClasses($ref, classMap) {
            for (let cl in classMap) {
                let classes = classMap[cl]
                let $el

                if (cl == '') {
                    $el = $ref
                } else {
                    $el = $ref.querySelector(cl)
                }

                $el.classList.remove(...classes)
                $el.classList.add(...classes)
            }
        }
    }
}
</script>

<style lang="scss">
@mixin mp0 {
    margin: 0;
    padding: 0;
}

@mixin ulreset {
    @include mp0;
    list-style-type: none;
}

@mixin border-box {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

@mixin vertical-center {
    position: absolute;
    top: 50%;
    left: 50%;

    @include transform(translateX(-50%) translateY(-50%));
}

@mixin unselectable {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    cursor: default;
}

@mixin ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

@mixin unclickable {
    @include unselectable;
    pointer-events: none;
}

@mixin svg {
    svg,
    svg path,
    svg polygon,
    svg rect,
    svg circle {
        @content;
    }
}

@mixin svg-path($include-parent: false) {
    path,
    polygon,
    rect,
    circle {
        @content;
    }

    @if $include-parent {
        & {
            @content;
        }
    }
}

@mixin media($type) {
    @if $type == mobile or $type == phone or $type == tablet {
        @media screen and (max-width: 600px) {
            @content;
        }
    } @else {
        @media screen and (min-width: 601px) {
            @content;
        }
    }
}
$colors: (
    blue: #039be5,
    red: #f44336,
    red-2: #e53935,
    red-3: #d32f2f,
    dark-red: #c62828,
    pink: #e91e63,
    indigo: #3f51b5,
    purple: #9c27b0,
    purple-2: #8e24aa,
    purple-3: #7b1fa2,
    deep-purple: #673ab7,
    deep-purple-2: #5e35b1,
    deep-purple-3: #512da8,
    cyan: #00bcd4,
    teal: #009688,
    green: #4caf50,
    green-2: #43a047,
    green-3: #388e3c,
    light-green: #8bc34a,
    light-green-2: #7cb342,
    light-green-3: #689f38,
    lime: #cddc39,
    yellow: #ffeb3b,
    amber: #ffc107,
    orange: #ff9800,
    deep-orange: #ff5722,
    brown: #795548,
    grey: #9e9e9e,
    dark-grey: #5a5a5a,
    light-grey: #999,
    blue-grey: #607d8b,
    black: #000,
    white: #fff,
    dark: #222c38,
    dark-overlay: #182028,
    dark-modal: #182028,
    border: #eaeaea
);

@function color($name) {
    @if map-has-key(getColors(), $name) {
        @return map-get(getColors(), $name);
    } @else {
        @warn "Color not found: #{$name}";
        @return #000;
    }
}

@function getColors() {
    @return $colors;
}

@keyframes animateSuccessTip {
    0% {
        width: 0;
        left: 1px;
        top: 19px;
    }
    54% {
        width: 0;
        left: 1px;
        top: 19px;
    }
    70% {
        width: 50px;
        left: -8px;
        top: 37px;
    }
    84% {
        width: 17px;
        left: 21px;
        top: 48px;
    }
    100% {
        width: 25px;
        left: 14px;
        top: 45px;
    }
}

@keyframes animateSuccessLong {
    0% {
        width: 0;
        right: 46px;
        top: 54px;
    }
    65% {
        width: 0;
        right: 46px;
        top: 54px;
    }
    84% {
        width: 55px;
        right: 0px;
        top: 35px;
    }
    100% {
        width: 47px;
        right: 8px;
        top: 38px;
    }
}

@keyframes rotatePlaceholder {
    0% {
        transform: rotate(-45deg);
    }
    5% {
        transform: rotate(-45deg);
    }
    12% {
        transform: rotate(-405deg);
    }
    100% {
        transform: rotate(-405deg);
    }
}

.animateSuccessTip {
    animation: animateSuccessTip 0.75s;
}

.animateSuccessLong {
    animation: animateSuccessLong 0.75s;
}

.sweet-modal-icon.sweet-modal-success.animate::after {
    animation: rotatePlaceholder 4.25s ease-in;
}

/* Error Icon */
@keyframes animateErrorIcon {
    0% {
        transform: rotateX(100deg);
        opacity: 0;
    }
    100% {
        transform: rotateX(0deg);
        opacity: 1;
    }
}

.animateErrorIcon {
    animation: animateErrorIcon 0.5s;
}

@keyframes animateXMark {
    0% {
        transform: scale(0.4);
        margin-top: 26px;
        opacity: 0;
    }
    50% {
        transform: scale(0.4);
        margin-top: 26px;
        opacity: 0;
    }
    80% {
        transform: scale(1.15);
        margin-top: -6px;
    }
    100% {
        transform: scale(1);
        margin-top: 0;
        opacity: 1;
    }
}

.animateXMark {
    animation: animateXMark 0.5s;
}

@keyframes pulseWarning {
    0% {
        border-color: #f8d486;
    }
    100% {
        border-color: #f8bb86;
    }
}

.pulseWarning {
    animation: pulseWarning 0.75s infinite alternate;
}

@keyframes pulseWarningIns {
    0% {
        background-color: #f8d486;
    }
    100% {
        background-color: #f8bb86;
    }
}

.pulseWarningIns {
    animation: pulseWarningIns 0.75s infinite alternate;
}

@keyframes rotate-loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.sweet-modal-icon {
    position: relative;

    width: 80px;
    height: 80px;

    border: 4px solid gray;
    border-radius: 50%;

    margin: auto;
    padding: 0;

    box-sizing: content-box;

    &.sweet-modal-error {
        border-color: color(red);

        .sweet-modal-x-mark {
            position: relative;
            display: block;
        }

        .sweet-modal-line {
            display: block;
            position: absolute;
            top: 37px;
            height: 5px;
            width: 47px;

            background-color: color(red);
            border-radius: 2px;

            &.sweet-modal-left {
                transform: rotate(45deg);
                left: 17px;
            }

            &.sweet-modal-right {
                transform: rotate(-45deg);
                right: 16px;
            }
        }
    }

    &.sweet-modal-warning {
        border-color: color(orange);

        .sweet-modal-body {
            // Exclamation mark body
            position: absolute;
            width: 5px;
            height: 47px;
            left: 50%;
            top: 10px;

            margin-left: -2px;

            border-radius: 2px;
            background-color: color(orange);
        }
        .sweet-modal-dot {
            // Exclamation mark dot
            position: absolute;
            left: 50%;
            bottom: 10px;
            width: 7px;
            height: 7px;

            margin-left: -3px;

            border-radius: 50%;
            background-color: color(orange);
        }
    }

    &.sweet-modal-info {
        border-color: color(blue);

        &::before {
            // i-letter body
            content: '';
            position: absolute;
            width: 5px;
            height: 29px;
            left: 50%;
            bottom: 17px;

            margin-left: -2px;

            border-radius: 2px;
            background-color: color(blue);
        }

        &::after {
            // i-letter dot
            content: '';
            position: absolute;
            width: 7px;
            height: 7px;
            top: 19px;

            margin-left: -3px;

            border-radius: 50%;
            background-color: color(blue);
        }
    }

    &.sweet-modal-success {
        border-color: color(green);

        &::before,
        &::after {
            // Emulate moving circular line
            content: '';
            position: absolute;

            border-radius: 40px;

            width: 60px;
            height: 120px;

            background: white;

            transform: rotate(45deg);
        }

        &::before {
            border-radius: 120px 0 0 120px;

            top: -7px;
            left: -33px;

            transform: rotate(-45deg);

            -webkit-transform-origin: 60px 60px;
            transform-origin: 60px 60px;
        }

        &::after {
            border-radius: 0 120px 120px 0;

            top: -11px;
            left: 30px;

            transform: rotate(-45deg);

            -webkit-transform-origin: 0px 60px;
            transform-origin: 0px 60px;
        }

        .sweet-modal-placeholder {
            // Ring
            box-sizing: content-box;
            position: absolute;
            left: -4px;
            top: -4px;
            z-index: 2;

            width: 80px;
            height: 80px;

            border: 4px solid rgba(color(green), 0.2);
            border-radius: 50%;
        }

        .sweet-modal-fix {
            // Hide corners left from animation
            position: absolute;
            left: 28px;
            top: 8px;
            z-index: 1;

            width: 7px;
            height: 90px;
            background-color: white;

            transform: rotate(-45deg);
        }

        .sweet-modal-line {
            display: block;
            position: absolute;
            z-index: 2;

            height: 5px;
            background-color: color(green);
            border-radius: 2px;

            &.sweet-modal-tip {
                width: 25px;

                left: 14px;
                top: 46px;

                transform: rotate(45deg);
            }

            &.sweet-modal-long {
                width: 47px;

                right: 8px;
                top: 38px;

                transform: rotate(-45deg);
            }
        }
    }

    &.sweet-modal-custom {
        border-radius: 0;
        border: none;

        background: {
            size: contain;
            position: center center;
            repeat: no-repeat;
        }
    }
}

.sweet-modal.theme-dark .sweet-modal-icon {
    &.sweet-modal-success {
        &::before,
        &::after,
        .sweet-modal-fix {
            background-color: color(dark-overlay);
        }
    }
}
.sweet-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100%;

    z-index: 9001;

    font-size: 14px;

    -webkit-font-smoothing: antialiased;

    // Theming
    background: rgba(#fff, 0.9);

    &.theme-dark {
        $color: color(dark-overlay);

        // background: radial-gradient(ellipse at center, rgba($color, 0.9) 0%, rgba($color, 0.96) 100%);
        background: rgba($color, 0.94);
    }

    // Animation
    opacity: 0;
    transition: opacity 0.3s;
    transform: translate3D(0, 0, 0);
    -webkit-perspective: 500px;

    &.is-visible {
        opacity: 1;
    }
}

.sweet-modal {
    @include border-box;

    background: #fff;
    box-shadow: 0px 8px 46px rgba(#000, 0.08), 0px 2px 6px rgba(#000, 0.03);

    position: absolute;
    top: 50%;
    left: 50%;
    // transform: translate(-50%, -50%); // Done by the animation later

    width: 80%;
    max-width: 640px;
    max-height: 100vh;
    overflow-y: auto;

    border-radius: 2px;

    .sweet-box-actions {
        position: absolute;
        top: 12px;
        right: 12px;

        .sweet-action-close {
            display: inline-block;
            cursor: pointer;

            color: color(dark);
            text-align: center;

            width: 42px;
            height: 42px;
            line-height: 42px;

            border-radius: 50%;

            svg {
                width: 24px;
                height: 24px;

                vertical-align: middle;
                margin-top: -2px;

                @include svg-path(true) {
                    fill: currentColor;
                }
            }

            &:hover {
                background: color(blue);
                color: #fff;
            }
        }
    }

    .sweet-title {
        @include ellipsis;

        height: 64px;
        line-height: 64px;

        border-bottom: 1px solid color(border);

        padding: {
            left: 32px;
            right: 64px;
        }

        > h2 {
            @include ellipsis;
            @include mp0;

            font-weight: 500;
            font-size: 22px;
        }
    }

    ul.sweet-modal-tabs {
        @include ulreset;

        display: flex;
        align-items: center;
        width: calc(100% + 32px);
        height: 100%;

        margin-left: -32px;
        overflow-x: auto;

        li.sweet-modal-tab {
            display: block;
            height: 100%;

            a {
                @include ellipsis;

                display: flex;
                align-items: center;

                padding: {
                    left: 20px;
                    right: 20px;
                }

                color: color(dark);
                text-decoration: none;
                text-align: center;

                height: 100%;

                span.sweet-modal-tab-title {
                    display: block;
                }

                span.sweet-modal-tab-icon {
                    display: block;
                    line-height: 1;

                    svg,
                    img {
                        width: 16px;
                        height: 16px;

                        @include svg-path(true) {
                            fill: currentColor;
                        }
                    }
                }

                span.sweet-modal-tab-icon + span.sweet-modal-tab-title {
                    line-height: 1;
                    margin-top: 8px;
                }
            }

            &:first-child a {
                padding-left: 32px;
            }

            &.active a {
                font-weight: 600;
                color: color(blue);
            }

            &.disabled a {
                @include unclickable;
                color: color(light-grey);
            }
        }
    }

    &.has-tabs:not(.has-title) {
        .sweet-title {
            height: 84px;
            line-height: 84px;
        }
    }

    &.has-tabs.has-title {
        ul.sweet-modal-tabs {
            width: 100%;
            height: 48px;

            margin: 0;
            border-bottom: 1px solid color(border);

            li.sweet-modal-tab a {
                margin-top: -4px;

                span.sweet-modal-tab-icon {
                    display: inline-block;

                    svg,
                    img {
                        vertical-align: middle;

                        margin: {
                            top: -2px;
                            right: 8px;
                        }
                    }
                }

                span.sweet-modal-tab-title {
                    display: inline-block;
                }
            }
        }
    }

    .sweet-content {
        display: flex;
        align-items: center;

        padding: {
            left: 32px;
            right: 32px;
            top: 24px;
            bottom: 24px;
        }

        line-height: 1.5;

        .sweet-content-content {
            flex-grow: 1;
        }

        .sweet-modal-tab:not(.active) {
            display: none;
        }

        .sweet-modal-icon {
            margin-bottom: 36px;
        }
    }

    .sweet-buttons {
        text-align: right;

        padding: {
            left: 20px;
            right: 20px;
            top: 12px;
            bottom: 12px;
        }
    }

    .sweet-content + .sweet-buttons {
        border-top: 1px solid color(border);
    }

    // Special Styles
    &.is-alert {
        .sweet-content {
            display: block;

            text-align: center;
            font-size: 16px;

            padding: {
                top: 64px;
                bottom: 64px;
            }
        }
    }

    &.has-tabs.has-icon .sweet-content {
        padding: {
            top: 32px;
            bottom: 32px;
        }

        .sweet-content-content {
            padding-left: 32px;
        }

        .sweet-modal-icon {
            margin-bottom: 0;
        }
    }

    &:not(.has-content) {
        .sweet-modal-icon {
            margin-bottom: 0;
        }
    }

    // Theming
    &.theme-dark {
        $color: color(dark-modal);

        background: $color;
        color: #fff;

        .sweet-box-actions {
            .sweet-action-close {
                color: #fff;
            }
        }

        .sweet-title {
            border-bottom-color: darken($color, 8%);
            box-shadow: 0px 1px 0px lighten($color, 8%);
        }

        ul.sweet-modal-tabs li {
            a {
                color: #fff;
            }

            &.active a {
                color: color(blue);
            }

            &.disabled a {
                color: lighten($color, 20%);
            }
        }

        &.has-tabs.has-title {
            ul.sweet-modal-tabs {
                border-bottom-color: darken($color, 8%);
                box-shadow: 0px 1px 0px lighten($color, 8%);
            }
        }

        .sweet-content + .sweet-buttons {
            border-top-color: lighten($color, 8%);
            box-shadow: 0px -1px 0px darken($color, 8%);
        }
    }

    // Animation
    transform: scale(0.9) translate(calc(-50% - 32px), -50%);
    opacity: 0;

    transition: {
        property: transform, opacity;
        duration: 0.3s;
        delay: 0.05s;
        timing-function: cubic-bezier(0.52, 0.02, 0.19, 1.02);
    }

    .sweet-buttons,
    .sweet-content {
        opacity: 0;

        transition: {
            property: transform, opacity;
            duration: 0.3s;
            delay: 0.09s;
            timing-function: cubic-bezier(0.52, 0.02, 0.19, 1.02);
        }
    }

    .sweet-content {
        transform: translateY(-8px);
    }

    .sweet-buttons {
        transform: translateY(16px);
    }

    &.is-visible {
        transform: translate(-50%, -50%);
        opacity: 1;

        .sweet-buttons,
        .sweet-content {
            transform: none;
            opacity: 1;
        }
    }

    &.bounce {
        animation-name: bounce;
        animation-duration: 0.3s;
        animation-iteration-count: 2;
        animation-direction: alternate;
    }

    // Responsiveness
    @include media(desktop) {
        // Bouncing animation
        @keyframes bounce {
            0% {
                transform: scale(1) translate(-50%, -50%);
            }

            50% {
                transform: scale(1.02) translate(calc(-50% + 8px), -50%);
            }

            100% {
                transform: scale(1) translate(-50%, -50%);
            }
        }
    }

    &.is-mobile-fullscreen {
        @include media(mobile) {
            & {
                width: 100%;
                height: 100%;

                left: 0;
                top: 0;

                transform: scale(0.9);

                &.is-visible {
                    transform: none;
                }
            }

            .sweet-buttons {
                @include border-box;

                position: absolute;
                bottom: 0;
                left: 0;

                width: 100%;
            }
        }
    }
}
</style>
