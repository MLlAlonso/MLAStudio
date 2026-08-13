document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");
    const musicIcon = document.getElementById("musicIcon");
    const musicText = document.getElementById("musicText");
    const countdown = document.getElementById("countdown");
    const countdownTitle = document.getElementById("countdownTitle");
    const countdownDays = document.getElementById("countdownDays");
    const countdownHours = document.getElementById("countdownHours");
    const countdownMinutes = document.getElementById("countdownMinutes");
    const locationButton = document.getElementById("locationButton");
    const partyLocationButton = document.getElementById("partyLocationButton");
    const hotelButton = document.getElementById("hotelButton");
    const attendanceButton = document.getElementById("attendanceButton");

    /* =====================================================
       MÚSICA
    ===================================================== */
    if (music && musicButton && musicIcon && musicText) {
        const updateMusicUI = (isPlaying) => {
            musicButton.classList.toggle("is-playing", isPlaying);
            musicButton.setAttribute("aria-pressed", String(isPlaying));

            if (isPlaying) {
                musicIcon.textContent = "❚❚";
                musicText.textContent = "Pausar música";
                musicButton.setAttribute("aria-label", "Pausar música");
            } else {
                musicIcon.textContent = "▶";
                musicText.textContent = "Reproducir música";
                musicButton.setAttribute("aria-label", "Reproducir música");
            }
        };

        updateMusicUI(false);

        const playMusic = async () => {
            try {
                await music.play();
                updateMusicUI(true);
            } catch (error) {
                console.error("No fue posible reproducir la música:", error);
                updateMusicUI(false);
            }
        };

        const pauseMusic = () => {
            music.pause();
            updateMusicUI(false);
        };

        musicButton.addEventListener(
            "click",
            () => {
                if (music.paused) {
                    playMusic();
                } else {
                    pauseMusic();
                }
            }
        );

        music.addEventListener("play", () => updateMusicUI(true));
        music.addEventListener("pause", () => updateMusicUI(false));
        music.addEventListener("error", () => {
            console.error("No se pudo cargar el archivo de audio.");
            musicButton.disabled = true;
            musicButton.style.opacity = "0.6";
            musicButton.style.cursor = "not-allowed";
            musicIcon.textContent = "!";
            musicText.textContent = "Audio no disponible";
        });
    }

    if (countdown && countdownTitle && countdownDays && countdownHours && countdownMinutes) {
        /*
        -----------------------------------------------------
        FECHA DEL EVENTO
        14 de noviembre de 2026
        00:00:00 hora local del dispositivo.
        -----------------------------------------------------
        */
        const eventDate = new Date(2026, 10, 14, 0, 0, 0);

        const formatNumber = (number) => {
            return String(number).padStart(2, "0");
        };

        const setTodayState = () => {
            countdownTitle.textContent = "Es hoy!";
            countdownDays.textContent = "00";
            countdownHours.textContent = "00";
            countdownMinutes.textContent = "00";
            countdown.classList.add("is-today");
        };

        const updateCountdown = () => {
            const now = new Date();
            const difference = eventDate.getTime() - now.getTime();

            if (now.getFullYear() === 2026 && now.getMonth() === 10 && now.getDate() === 14) {
                setTodayState();
                return;
            }

            if (difference <= 0) {
                setTodayState();
                return;
            }

            const totalSeconds = Math.floor(difference / 1000);
            const days = Math.floor(totalSeconds / 86400);
            const hours = Math.floor((totalSeconds % 86400) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            countdownTitle.textContent = "Faltan";
            countdownDays.textContent = formatNumber(days);
            countdownHours.textContent = formatNumber(hours);
            countdownMinutes.textContent = formatNumber(minutes);
            countdown.classList.remove("is-today");
        };

        updateCountdown();
        let countdownInterval = null;
        const startCountdown = () => {
            if (countdownInterval !== null) {
                return;
            }

            countdownInterval = setInterval(updateCountdown, 1000);
        };

        const stopCountdown = () => {
            if (countdownInterval === null) {
                return;
            }

            clearInterval(countdownInterval);
            countdownInterval = null;
        };

        startCountdown();

        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                stopCountdown();
            } else {
                updateCountdown();
                startCountdown();
            }
        });
    }

    const openExternalLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    if (locationButton) {
        locationButton.addEventListener("click", () => {
            openExternalLink("https://maps.app.goo.gl/AGHAwxuhZfA69TEn6");
        });
    }

    if (partyLocationButton) {
        partyLocationButton.addEventListener("click", () => {
            openExternalLink("https://maps.app.goo.gl/5Zx4AhyjzuVdCio47");
        });
    }

    if (hotelButton) {
        hotelButton.addEventListener("click", () => {
            openExternalLink("https://www.ihg.com/holidayinn/hotels/us/es/find-hotels/hotel-search?qDest=Ciudad%20Del%20Carmen,%20Mexico&qPt=CASH&qCiD=14&qCoD=15&qCiMy=102026&qCoMy=102026&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&srb_u=1&qFS=false&qSrt=sBR&qBrs=6c.hi.ex.sb.ul.ic.cp.cw.in.vn.cv.rs.ki.kd.ma.sp.va.sp.re.vx.nd.sx.we.lx.rn.sn.sn.sn.sn.sn.sn.nu.ge.fa&qWch=0&qSmP=0&qRad=30&qRdU=mi&setPMCookies=false&qpMbw=0&qErm=false&qpMn=1");
        });
    }

    if (attendanceButton) {
        attendanceButton.addEventListener("click", () => {
            openExternalLink("https://docs.google.com/forms/d/e/1FAIpQLSdYIEVrGBuMPRGvzSsemWvY64Yo1fmj3cBusthL3JxF_COV9A/viewform?usp=sharing&ouid=103466821143870519936");
        });
    }
});