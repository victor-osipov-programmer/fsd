<template>
    <div class="app-footer">
        <div class="content">
            <div class="contacts">
                <h5 class="contacts__sub-header sub-header">Contact Us</h5>

                <ul class="contacts-list">
                    <li class="contacts-list__item">
                        <p class="contacts-list__name">Email</p>
                        <p class="contacts-list__value">needhelp@Organia.com</p>
                    </li>
                    <li class="contacts-list__item">
                        <p class="contacts-list__name">Phone</p>
                        <p class="contacts-list__value">666 888 888</p>
                    </li>
                    <li class="contacts-list__item">
                        <p class="contacts-list__name">Address</p>
                        <p class="contacts-list__value">88 road, borklyn street, USA</p>
                    </li>
                </ul>
            </div>

            <div class="ver-line"></div>

            <div class="icons">
                <logo></logo>
                <p class="icons__description">
                    Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply
                    dummy text of the printing
                </p>

                <ul class="icons-list">
                    <li>
                        <img src="@/shared/svg/icons/instagram.svg" alt="instagram" />
                    </li>
                    <li>
                        <img src="@/shared/svg/icons/facebook.svg" alt="facebook" />
                    </li>
                    <li>
                        <img src="@/shared/svg/icons/twiter.svg" alt="twiter" />
                    </li>
                    <li>
                        <img src="@/shared/svg/icons/pinterest.svg" alt="pinterest" />
                    </li>
                </ul>
            </div>

            <div class="ver-line"></div>

            <div class="pages">
                <h5 class="pages__sub-header sub-header">Utility Pages</h5>

                <ul class="pages-list">
                    <li class="pages-list__item">
                        <p class="pages-list__value">Style Guide</p>
                    </li>
                    <li class="pages-list__item">
                        <p class="pages-list__value">404 Not Found</p>
                    </li>
                    <li class="pages-list__item">
                        <p class="pages-list__value">Password Protected</p>
                    </li>
                    <li class="pages-list__item">
                        <p class="pages-list__value">Licences</p>
                    </li>
                    <li class="pages-list__item">
                        <p class="pages-list__value">Changelog</p>
                    </li>
                </ul>
            </div>
        </div>

        <hr class="line" />

        <p class="copyright">
            Copyright © <span class="copyright__span">Organick</span> | Designed by
            <span class="copyright__span">VictorFlow</span> Templates - Powered by
            <span class="copyright__span">Webflow</span>
        </p>
    </div>
</template>

<script setup>
import { Logo } from '@/shared/ui/logo'
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    justify-content: center;
    margin-bottom: 106px;
}

.contacts {
    text-align: right;
    margin-right: 50.5px;
    margin-left: -55px;
}
.contacts__sub-header {
    margin-bottom: 32px;
}
.logo {
    margin-bottom: 23px;
}
.contacts-list__item:not(:last-child) {
    margin-bottom: 32px;
}
.contacts-list__name {
    font-weight: 700;
}

.icons {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.icons__description {
    text-align: center;
    max-width: 543px;
    margin-bottom: 49px;
}
.icons-list {
    display: flex;
    gap: 15px;
}

.pages {
    margin-left: 50.5px;
}
.pages__sub-header {
    margin-bottom: 24px;
}
.pages-list__value {
    line-height: 49.12px;
}

.copyright {
    text-align: center;
    padding-block: 17px;
}
.copyright__span {
    font-weight: 700;
}
</style>
