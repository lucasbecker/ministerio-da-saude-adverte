/**
 * ViewBox usado em telas maiores.
 * @type {string}
 */
const SVG_VIEWBOX_DESKTOP = "0 0 1000 120";

/**
 * ViewBox usado em telas pequenas (mobile).
 * @type {string}
 */
const SVG_VIEWBOX_MOBILE = "0 0 500 120";

/**
 * Media query que define o breakpoint mobile.
 * @type {string}
 */
const MOBILE_MEDIA_QUERY = "(max-width: 500px)";

/**
 * Todos os SVGs com a classe `.stripe`.
 * @type {NodeListOf<SVGElement>}
 */
const svgs = document.querySelectorAll("svg.stripe");

/**
 * Elemento <video> que exibirá o stream da câmera.
 * @type {HTMLVideoElement | null}
 */
const video = document.getElementById("camera");

/**
 * MediaQueryList usada para detectar mudanças de viewport.
 * @type {MediaQueryList}
 */
const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);

/**
 * Câmera atual selecionada.
 * Pode ser "user" (frontal) ou "environment" (traseira).
 * @type {"user" | "environment"}
 */
let currentFacingMode = "user"; // 'user' = frontal, 'environment' = traseira

/**
 * Stream ativo da câmera.
 * É um objeto MediaStream retornado pelo getUserMedia ou null se não houver stream.
 * @type {MediaStream | null}
 */
let stream = null;

/**
 * Lista as câmeras disponíveis no dispositivo.
 * @returns {Promise<MediaDeviceInfo[]>}
 */
async function getVideoDevices() {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter((device) => device.kind === "videoinput");
}

/**
 * Inicia o stream da câmera escolhida.
 * @param {string} facingMode - "user" ou "environment"
 */
async function startCamera(facingMode = "user") {
  try {
    if (!video || !navigator.mediaDevices?.getUserMedia) {
      throw new Error("Câmera não suportada neste navegador.");
    }

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode },
      audio: false,
    });

    video.srcObject = stream;
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Não foi possível acessar a câmera.";

    alert(message);
  }
}

/**
 * Alterna entre frontal e traseira
 */
function toggleCamera() {
  currentFacingMode = currentFacingMode === "user" ? "environment" : "user";
  startCamera(currentFacingMode);
}

/**
 * Atualiza o atributo `viewBox` dos SVGs de acordo com o tamanho da tela.
 *
 * @param {boolean} isMobile - Indica se a viewport corresponde ao breakpoint mobile.
 * @returns {void}
 */
function setViewBox(isMobile) {
  const viewBox = isMobile ? SVG_VIEWBOX_MOBILE : SVG_VIEWBOX_DESKTOP;

  svgs.forEach((svg) => svg.setAttribute("viewBox", viewBox));
}

startCamera(currentFacingMode);
setViewBox(mediaQuery.matches);

document.addEventListener("dblclick", toggleCamera);
mediaQuery.addEventListener("change", (e) => setViewBox(e.matches));
