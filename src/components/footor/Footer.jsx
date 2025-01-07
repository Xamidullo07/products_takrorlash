import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
     <footer class="footer">
            <div class="container">
                <div class="footer_top">
                    <h2 class="footer_top__title">NEWSLETTER</h2>
                    <p class="footer_top__text">
                        Subscribe our News Letter to get Latest Updates.
                    </p>
                </div>
            </div>
            <div class="container">
                <div class="footer_content">
                    <div class="footer_content__block">
                        <p class="footer_content__text">Let's make something special</p>
                        <p class="footer_cap">Let's talk! 🤙</p>
                        <a class="footer__number" href="#">020 7993 2905</a>
                        <a class="footer__number" href="#">hi@finsweet.com</a>
                        <p class="footer__location">
                            DLF Cybercity, Bhubaneswar, India, &52050
                        </p>
                    </div>
                    <div class="footer__lists">
                        <div class="footer__block">
                            <ul class="footer__list">
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Home</a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Service</a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Company</a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Career </a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">News</a>
                                </li>
                            </ul>
                            <ul class="footer__list">
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Service</a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Technical support</a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Testing</a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Development</a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">AWS/Azure </a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Consulting</a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Information Technology</a>
                                </li>
                            </ul>
                            <ul class="footer__list">
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Resourses</a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">About Us</a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Testimonial</a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Privacy Policy</a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Terms of use</a>
                                </li>
                                <li class="footer__item">
                                    <a class="footer__link" href="#">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer_link__block">
                            <a class="footer__btn" href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer__bottom">

                <div class="container">

                    <div class="footer__bottom__content">
                        <div class="footer__bottom__logos">
                            <a href="#">
                                <img src="../public/logo_img_2.svg" alt=""/>
                            </a>

                            <p class="footer__bottom__text">©2021 Finsweet</p>
                        </div>

                        <ul class="footer__bottom__icon_list">
                            <li class="footer__bottom__itms">
                                <a href="#">
                                    <img src="../public/facebook_icon.svg" alt="img"/>
                                </a>
                            </li>
                            <li class="footer__bottom__itms">
                                <a href="#">
                                    <img src="../public/twitter_icon.svg" alt="img"/>
                                </a>
                            </li>
                            <li class="footer__bottom__itms">
                                <a href="#">
                                    <img src="../public/instagram_icon.svg" alt="img"/>
                                </a>
                            </li>
                            <li class="footer__bottom__itms">
                                <a href="#">
                                    <img src="../public/in_icon.svg" alt="img"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer