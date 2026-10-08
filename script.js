const mainPage = document.getElementById("mainPage");
const signin = document.getElementById("signin");

const authScreen = document.getElementById("authScreen");
const closeAuth = document.getElementById("closeAuth");
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const authTitle = document.getElementById("authTitle");
const authSmallLabel = document.getElementById("authSmallLabel");
const authSubtitle = document.getElementById("authSubtitle");
const authMessage = document.getElementById("authMessage");

const infoScreen = document.getElementById("infoScreen");
const closeInfo = document.getElementById("closeInfo");
const infoTitle = document.getElementById("infoTitle");
const infoContent = document.getElementById("infoContent");

const navLinks = document.querySelectorAll(".navbar nav a");


/* =========================================
   PAGE LOCK
========================================= */

function lockPage() {
    document.body.classList.add("no-scroll");
}

function unlockPage() {
    document.body.classList.remove("no-scroll");
}


/* =========================================
   OPEN LOGIN / SIGN-IN
========================================= */

function openAuth(mode = "login") {

    mainPage.classList.add("page-exit");

    closeInfoScreen(false);

    setTimeout(() => {

        authScreen.classList.add("open");
        authScreen.setAttribute("aria-hidden", "false");

        lockPage();

        setAuthMode(mode);

    }, 420);
}


/* =========================================
   CLOSE LOGIN / SIGN-IN
========================================= */

function closeAuthScreen() {

    authScreen.classList.remove("open");

    authScreen.setAttribute("aria-hidden", "true");

    setTimeout(() => {

        mainPage.classList.remove("page-exit");

        unlockPage();

    }, 650);
}


/* =========================================
   LOGIN / SIGN-UP SWITCH
========================================= */

function setAuthMode(mode) {

    const isSignup = mode === "signup";

    loginTab.classList.toggle("active", !isSignup);

    signupTab.classList.toggle("active", isSignup);

    loginForm.classList.toggle("hidden", isSignup);

    signupForm.classList.toggle("hidden", !isSignup);


    if (isSignup) {

        authSmallLabel.textContent = "MAKE YOUR STAY SPECIAL";

        authTitle.textContent = "Create account";

        authSubtitle.textContent =
            "Create your account and make your next getaway easier.";

    } else {

        authSmallLabel.textContent = "WELCOME BACK";

        authTitle.textContent = "Sign in";

        authSubtitle.textContent =
            "Access your Lydia's Resort account to continue.";

    }

    authMessage.textContent = "";
}


/* =========================================
   SIGN-IN BUTTON
========================================= */

if (signin) {

    signin.addEventListener("click", () => {

        signin.classList.add("clicked");

        setTimeout(() => {

            signin.classList.remove("clicked");

            openAuth("login");

        }, 180);

    });

}


/* =========================================
   LOGIN / CREATE ACCOUNT TABS
========================================= */

if (loginTab) {

    loginTab.addEventListener("click", () => {

        setAuthMode("login");

    });

}


if (signupTab) {

    signupTab.addEventListener("click", () => {

        setAuthMode("signup");

    });

}


/* =========================================
   SWITCH LINKS
========================================= */

document.querySelectorAll(".switch-signup").forEach(button => {

    button.addEventListener("click", () => {

        setAuthMode("signup");

    });

});


document.querySelectorAll(".switch-login").forEach(button => {

    button.addEventListener("click", () => {

        setAuthMode("login");

    });

});


/* =========================================
   CLOSE AUTH SCREEN
========================================= */

if (closeAuth) {

    closeAuth.addEventListener("click", closeAuthScreen);

}


authScreen.addEventListener("click", (event) => {

    if (event.target === authScreen) {

        closeAuthScreen();

    }

});


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (authScreen.classList.contains("open")) {

            closeAuthScreen();

        }

        if (infoScreen.classList.contains("open")) {

            closeInfoScreen();

        }

    }

});


/* =========================================
   SHOW / HIDE PASSWORD
========================================= */

document.querySelectorAll(".show-password").forEach(button => {

    button.addEventListener("click", () => {

        const input = document.getElementById(button.dataset.target);

        if (!input) return;

        const showing = input.type === "text";

        input.type = showing ? "password" : "text";

        button.textContent = showing ? "Show" : "Hide";

    });

});


/* =========================================
   LOGIN FORM
========================================= */

if (loginForm) {

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        authMessage.textContent =
            "Login form is ready — connect it to your database/backend.";

    });

}


/* =========================================
   SIGN-UP FORM
========================================= */

if (signupForm) {

    signupForm.addEventListener("submit", (event) => {

        event.preventDefault();

        authMessage.textContent =
            "Sign-up form is ready — connect it to your database/backend.";

    });

}


/* =========================================
   FORGOT PASSWORD
========================================= */

const forgotPassword = document.getElementById("forgotPassword");

if (forgotPassword) {

    forgotPassword.addEventListener("click", () => {

        authMessage.textContent =
            "Password recovery can be connected to your email service.";

    });

}


/* =========================================
   RESORT / PACKAGES INFORMATION
========================================= */

function openInfo(type) {

    const content = {

        resort: {

            title: "The Resort",

            html: `
                <p class="info-copy">
                    Enjoy a calm and refreshing stay surrounded by greenery,
                    relaxing water features, and a private resort atmosphere
                    designed for memorable vacations.
                </p>

                <div class="resort-features">

                    <div class="feature-card">
                        <strong>Private Pool</strong>
                        <span>
                            Enjoy a refreshing swimming area for relaxing days
                            with family and friends.
                        </span>
                    </div>

                    <div class="feature-card">
                        <strong>Nature Escape</strong>
                        <span>
                            A peaceful green setting that gives every guest
                            a quiet place to unwind.
                        </span>
                    </div>

                    <div class="feature-card">
                        <strong>Comfortable Stay</strong>
                        <span>
                            A welcoming space designed for celebrations,
                            gatherings, and weekend getaways.
                        </span>
                    </div>

                </div>
            `

        },


        packages: {

            title: "Resort Packages",

            html: `
                <p class="info-copy">
                    Choose a package that matches the kind of stay you want.
                    These are presentation-ready package options that can later
                    be connected to your booking system.
                </p>

                <div class="package-grid">

                    <div class="package-card">

                        <h3>Day Escape</h3>

                        <p>
                            Perfect for a relaxing daytime getaway with access
                            to the resort facilities.
                        </p>

                        <span class="package-price">
                            Starting package
                        </span>

                    </div>


                    <div class="package-card featured">

                        <h3>Family Stay</h3>

                        <p>
                            A comfortable choice for families and small groups
                            who want a full resort experience.
                        </p>

                        <span class="package-price">
                            Most popular
                        </span>

                    </div>


                    <div class="package-card">

                        <h3>Celebration</h3>

                        <p>
                            Designed for birthdays, reunions, and special
                            gatherings in a private setting.
                        </p>

                        <span class="package-price">
                            Custom booking
                        </span>

                    </div>

                </div>
            `

        }

    };


    const selected = content[type];

    if (!selected) return;


    mainPage.classList.add("page-exit");


    setTimeout(() => {

        infoTitle.textContent = selected.title;

        infoContent.innerHTML = selected.html;

        infoScreen.classList.add("open");

        infoScreen.setAttribute("aria-hidden", "false");

        lockPage();

    }, 420);

}


/* =========================================
   CLOSE RESORT / PACKAGES SCREEN
========================================= */

function closeInfoScreen(restore = true) {

    infoScreen.classList.remove("open");

    infoScreen.setAttribute("aria-hidden", "true");


    if (restore) {

        setTimeout(() => {

            mainPage.classList.remove("page-exit");

            unlockPage();

        }, 650);

    }

}


if (closeInfo) {

    closeInfo.addEventListener("click", () => {

        closeInfoScreen(true);

    });

}


/* =========================================
   CLICK OUTSIDE INFO CARD TO CLOSE
========================================= */

infoScreen.addEventListener("click", (event) => {

    if (event.target.classList.contains("info-backdrop")) {

        closeInfoScreen(true);

    }

});


/* =========================================
   NAVIGATION
========================================= */

if (navLinks.length > 0) {

    navLinks[0].classList.add("selected");

}


navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        const page = this.dataset.page;

        const href = this.getAttribute("href");


        /* RESORT */

        if (page === "resort") {

            event.preventDefault();


            navLinks.forEach(nav => {

                nav.classList.remove("selected");

            });


            this.classList.add("selected");


            openInfo("resort");

            return;

        }


        /* PACKAGES */

        if (page === "packages") {

            event.preventDefault();


            navLinks.forEach(nav => {

                nav.classList.remove("selected");

            });


            this.classList.add("selected");


            openInfo("packages");

            return;

        }


        /* HOME */

        if (!href || !href.startsWith("#")) {

            return;

        }


        const target = document.querySelector(href);


        if (target) {

            event.preventDefault();


            navLinks.forEach(nav => {

                nav.classList.remove("selected");

            });


            this.classList.add("selected");


            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* =========================================
   CLICKING THE IMAGE
========================================= */

const photoFrame = document.querySelector(".photo-frame");


if (photoFrame) {

    photoFrame.addEventListener("click", () => {

        if (infoScreen.classList.contains("open")) {

            closeInfoScreen(true);

        }

    });

}