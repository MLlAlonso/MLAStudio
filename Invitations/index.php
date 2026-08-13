<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Invitación a los XV años de Karla de Maria.">
    <meta name="author" content="Karla de Maria">
    <meta name="theme-color" content="#BAD0E4">

    <title>XV Años | Karla de Maria</title>
    <link rel="icon" type="image/png" href="assets/img/flor.png">

    <link rel="preload" as="image"
        href="https://res.cloudinary.com/dhzmsgmq2/image/upload/w_600,q_auto,f_auto/v1786517094/KDM_nkdby2.webp"
        fetchpriority="high">

    <link rel="stylesheet" href="assets/styles/index.css">
</head>

<body>
    <main>
        <header class="hero">
            <div class="hero__overlay"></div>

            <div class="hero__content">
                <img class="hero__logo"
                    src="https://res.cloudinary.com/dhzmsgmq2/image/upload/w_600,q_auto,f_auto/v1786517094/KDM_nkdby2.webp"
                    alt="Karla de Maria" width="600" height="600" fetchpriority="high" decoding="async">

                <button class="music-button" id="musicButton" type="button" aria-label="Reproducir música"
                    aria-pressed="false">

                    <span class="music-button__icon" id="musicIcon" aria-hidden="true">
                        ▶
                    </span>

                    <span class="music-button__text" id="musicText">
                        Reproducir música
                    </span>
                </button>
            </div>


            <!-- =============================================
                 AUDIO

                 No se descarga hasta que el usuario
                 interactúe con el botón.
            ============================================== -->

            <audio id="backgroundMusic" preload="none" loop>

                <source src="assets/audio/cancion.mp3" type="audio/mpeg">

                Tu navegador no soporta reproducción de audio.

            </audio>

        </header>

        <section class="invitation-section" aria-label="Invitación">
            <div class="invitation-section__content">
                <img class="invitation-section__image invitation-section__image--description"
                    src="https://res.cloudinary.com/dhzmsgmq2/image/upload/w_500,q_auto,f_auto/v1786516340/Descripcion_w1tvz6.webp"
                    alt="Descripción de la celebración" width="500" height="300" loading="lazy" decoding="async">

                <img class="invitation-section__image invitation-section__image--parents"
                    src="https://res.cloudinary.com/dhzmsgmq2/image/upload/w_900,q_auto,f_auto/v1786515959/Asset-Padres_q3lhnn.webp"
                    alt="Padres de Karla de Maria" width="900" height="500" loading="lazy" decoding="async">

                <img class="invitation-section__image invitation-section__image--invitation"
                    src="https://res.cloudinary.com/dhzmsgmq2/image/upload/w_600,q_auto,f_auto/v1786516340/Estas_invitado_seyzsl.webp"
                    alt="Estás invitado" width="600" height="300" loading="lazy" decoding="async">
            </div>
        </section>

        <section class="event-section" aria-label="Información de la misa">
            <div class="event-section__content">
                <img class="event-section__logo"
                    src="https://res.cloudinary.com/dhzmsgmq2/image/upload/w_500,q_auto,f_auto/v1786518072/KDM-WHITE_svhaw3.webp"
                    alt="Karla de Maria" width="500" height="500" loading="lazy" decoding="async">

                <div class="countdown" id="countdown" aria-live="polite">
                    <p class="countdown__title" id="countdownTitle">
                        Faltan:
                    </p>

                    <div class="countdown__timer" id="countdownTimer">
                        <div class="countdown__item">
                            <span class="countdown__number" id="countdownDays">
                                00
                            </span>

                            <span class="countdown__label">
                                Días
                            </span>
                        </div>

                        <div class="countdown__item">
                            <span class="countdown__number" id="countdownHours">
                                00
                            </span>

                            <span class="countdown__label">
                                Horas
                            </span>
                        </div>

                        <div class="countdown__item">
                            <span class="countdown__number" id="countdownMinutes">
                                00
                            </span>

                            <span class="countdown__label">
                                Minutos
                            </span>
                        </div>
                    </div>
                </div>

                <img class="event-section__image event-section__image--misa"
                    src="https://res.cloudinary.com/dhzmsgmq2/image/upload/w_600,q_auto,f_auto/v1786521036/MISA_cdlg5v.webp"
                    alt="Misa" width="600" height="300" loading="lazy" decoding="async">

                <img class="event-section__image event-section__image--iglesia"
                    src="https://res.cloudinary.com/dhzmsgmq2/image/upload/w_600,q_auto,f_auto/v1786521035/IGLESIA_zhbxew.webp"
                    alt="Iglesia" width="600" height="300" loading="lazy" decoding="async">

                <button class="location-button" id="locationButton" type="button">
                    Ver ubicación
                </button>
            </div>
        </section>

        <section class="party-section" aria-label="Información de la fiesta">
            <div class="party-card">
                <img class="party-card__title party-card__title--party"
                    src="https://res.cloudinary.com/dhzmsgmq2/image/upload/w_400,q_auto,f_auto/v1786591262/FIESTA_rubbw7.webp"
                    alt="Fiesta" width="400" height="250" loading="lazy" decoding="async">

                <img class="party-card__image party-card__image--reception"
                    src="https://res.cloudinary.com/dhzmsgmq2/image/upload/w_500,q_auto,f_auto/v1786591263/Recepcion_mx6ows.webp"
                    alt="Recepción" width="500" height="250" loading="lazy" decoding="async">

                <button class="party-card__button" id="partyLocationButton" type="button">
                    Ver ubicación
                </button>

                <img class="party-card__image party-card__image--hotel"
                    src="https://res.cloudinary.com/dhzmsgmq2/image/upload/w_500,q_auto,f_auto/v1786591263/Hospedaje_lfzp9o.webp"
                    alt="Hospedaje" width="500" height="250" loading="lazy" decoding="async">

                <button class="party-card__button" id="hotelButton" type="button">
                    Reservar
                </button>
            </div>
        </section>

        <section class="dresscode-section" aria-label="Dresscode y confirmación de asistencia">
            <div class="dresscode-section__content">
                <img class="dresscode-section__image"
                    src="https://res.cloudinary.com/dhzmsgmq2/image/upload/w_900,q_auto,f_auto/v1786585437/Dresscode_y_regalo_dufuop.webp"
                    alt="Dresscode y regalo" width="900" height="1200" loading="lazy" decoding="async">

                <button class="location-button" id="attendanceButton" type="button">
                    Confirmar asistencia
                </button>
            </div>
        </section>
    </main>

    <script src="assets/js/index.js" defer></script>
</body>

</html>