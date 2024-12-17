import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado del menú

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
      <svg width="142" height="37" viewBox="0 0 142 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_2949)">
      <g clip-path="url(#clip1_1_2949)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6304 0.456674C15.3937 0.459587 15.157 0.462501 14.9203 0.46344C10.2442 0.474248 5.84901 2.271 2.47447 5.53334L2.32035 5.68417C2.29497 5.70879 2.26932 5.73304 2.24385 5.75738C2.04246 5.94928 1.84708 6.13536 1.7452 6.40216C1.73534 6.48176 1.72866 6.53523 1.73365 6.58758C1.7437 6.69471 1.80225 6.79734 1.98052 7.10991C2.06406 7.25112 2.14657 7.39294 2.22806 7.53534L2.36151 7.7685C2.64127 8.25146 2.91854 8.73585 3.1933 9.22167L3.37186 9.53725L3.54816 9.84456L3.71281 10.1352C3.89701 10.4579 4.03431 10.7323 4.07077 11.1055L3.91834 11.2868C2.09837 12.8707 0.936716 15.5341 0.405368 17.8315C0.3745 17.9703 0.3433 18.1091 0.311766 18.2477C0.0600004 19.191 0.00511757 20.0967 0.000888586 21.0665L0.000324721 21.2668C-0.00963689 23.1057 0.231979 24.9887 0.937938 26.6999L1.06349 26.9877C1.91258 28.9739 3.00854 30.7287 4.58699 32.2117L4.72861 32.3444C5.79921 33.3736 6.97308 34.2398 8.30953 34.8899L8.48771 34.9757C9.53246 35.4885 10.598 35.8554 11.7268 36.1394L11.9649 36.1974C13.2988 36.5237 14.6338 36.5235 16.0019 36.4911C19.7483 36.3381 23.4695 34.5547 26.0204 31.8326L26.1555 31.6865C29.2736 28.3168 30.1965 24.4849 30.1965 19.9393H21.4566V14.8646H18.5433V27.9274H21.4566V22.8526H27.1892L27.1859 22.8707C27.0773 23.4679 26.9775 24.0171 26.8082 24.593L26.7369 24.8262C26.5579 25.413 26.3763 25.9898 26.1041 26.5413L25.9675 26.7997C25.2428 28.2176 24.3586 29.4691 23.1463 30.5133L22.8663 30.7468C20.4199 32.7904 17.4956 33.58 14.3569 33.5077C11.4622 33.3912 8.44928 32.0834 6.4484 29.9583L6.23225 29.713C3.90227 27.0938 2.94191 24.1408 3.01052 20.6622C3.10825 17.7618 4.35064 14.8228 6.4734 12.8136L6.70214 12.6091C8.96916 10.574 11.6954 9.27214 14.7846 9.28595C14.9911 9.2883 15.1976 9.29056 15.4043 9.29028C16.1187 9.28812 16.8137 9.29479 17.5133 9.45991L17.6975 9.50784C19.8452 9.99567 22.1254 11.066 23.6437 12.705L23.806 12.891C25.1013 14.3319 26.1831 15.9454 26.7193 17.8248L26.9073 18.5297H29.9146C29.9146 16.1413 28.1237 13.2616 26.5666 11.5518C26.4726 11.4589 26.4281 11.415 26.3868 11.3684C26.3496 11.3266 26.3151 11.2827 26.2495 11.1994C26.1642 10.976 26.1397 10.8671 26.2217 10.6397L26.3327 10.4451L26.4576 10.2223L26.596 9.98364C26.7408 9.72633 26.8867 9.46959 27.0336 9.2134L27.1892 8.94397L27.3463 8.672L27.5027 8.40106C27.6037 8.2257 27.7048 8.05034 27.8059 7.87498C28.0409 7.47463 28.2678 7.07823 28.4605 6.65552C28.4843 6.52161 28.4954 6.45977 28.4856 6.40141C28.4772 6.35122 28.4533 6.30367 28.4091 6.21533L28.223 6.03067C25.9485 3.77004 23.3394 2.10983 20.2654 1.1663L19.9765 1.07928C18.5493 0.63946 17.1209 0.446806 15.6304 0.456674ZM24.2642 8.27438C24.5402 7.81821 24.7897 7.39485 24.9338 6.87647C19.3338 2.65603 10.7559 1.61899 5.29248 6.87647V7.1584C5.3936 7.31017 5.49387 7.46279 5.58804 7.61898L5.70429 7.81737L5.83097 8.03305L5.96207 8.25671C6.08706 8.46976 6.21205 8.68271 6.33685 8.89576L6.42021 9.03795C6.64392 8.9296 6.86144 8.8089 7.07176 8.67642C10.1338 6.72638 13.8655 5.93772 17.4603 6.52997L17.7915 6.59453C19.5373 6.91923 21.0175 7.51157 22.5723 8.36422C22.6986 8.43367 22.825 8.50275 22.9517 8.57154C23.1824 8.69625 23.4128 8.82142 23.6426 8.94764L23.806 9.03795C23.9148 8.85817 24.023 8.67801 24.1309 8.49758L24.2642 8.27438Z" fill="#CC0000"/>
      <path d="M14.2203 17.026H17.0397V25.766H14.2203V17.026Z" fill="white"/>
      <path d="M17.0397 12.2332C17.1336 12.3272 17.1336 12.3272 17.1442 12.6053L17.1427 12.9736L17.1424 13.1692C17.1418 13.3761 17.1407 13.5829 17.1395 13.7897L17.1381 14.2095C17.1371 14.5532 17.1356 14.8968 17.1336 15.2405C17.0317 15.2259 16.9297 15.2113 16.8277 15.1967C14.8768 14.9186 13.0007 14.9582 11.3383 16.2037C10.0422 17.2613 8.9933 18.7172 8.76963 20.4092C8.61382 22.1817 8.97112 23.88 10.0618 25.3137C11.2184 26.6751 12.7052 27.5934 14.5071 27.7571C15.3777 27.8071 16.1684 27.6856 17.0397 27.5515V30.5588C14.3532 30.9426 11.7509 30.5423 9.53076 28.9251C7.39916 27.2796 6.24887 25.0552 5.80013 22.4301C5.68661 21.4414 5.71414 20.437 5.95031 19.4695L6.02004 19.1461C6.59734 16.6962 8.19909 14.698 10.2968 13.3434C12.2798 12.1684 14.7763 11.6166 17.0397 12.2332ZM39.3766 25.7363C39.0007 25.7363 38.6577 25.647 38.3475 25.4684C38.0468 25.2805 37.8025 25.0361 37.6145 24.7354C37.436 24.4253 37.3467 24.0823 37.3467 23.7063V17.6166C37.3467 17.2407 37.436 16.9024 37.6145 16.6016C37.8025 16.2915 38.0468 16.0472 38.3475 15.8686C38.6577 15.6807 39.0007 15.5867 39.3766 15.5867H45.4522C45.8282 15.5867 46.1665 15.6807 46.4672 15.8686C46.7773 16.0472 47.0264 16.2915 47.2143 16.6016C47.4023 16.9024 47.4963 17.2407 47.4963 17.6166V18.4906H45.4381V17.7153C45.4381 17.6871 45.4287 17.6683 45.41 17.6589C45.4006 17.6401 45.3818 17.6307 45.3536 17.6307H39.4612C39.433 17.6307 39.4095 17.6401 39.3907 17.6589C39.3813 17.6683 39.3766 17.6871 39.3766 17.7153V23.6077C39.3766 23.6359 39.3813 23.6594 39.3907 23.6782C39.4095 23.6876 39.433 23.6923 39.4612 23.6923H45.3536C45.3818 23.6923 45.4006 23.6876 45.41 23.6782C45.4287 23.6594 45.4381 23.6359 45.4381 23.6077V21.9443H43.1968V19.9003H47.4963V23.7063C47.4963 24.0823 47.4023 24.4253 47.2143 24.7354C47.0264 25.0361 46.7773 25.2805 46.4672 25.4684C46.1665 25.647 45.8282 25.7363 45.4522 25.7363H39.3766ZM50.1757 28.7106V26.6948H55.0673C55.0861 26.6948 55.1049 26.6854 55.1237 26.6666C55.1424 26.6478 55.1518 26.629 55.1518 26.6103V25.7363H50.8524C50.4859 25.7363 50.1522 25.647 49.8515 25.4684C49.5508 25.2805 49.3064 25.0361 49.1185 24.7354C48.9399 24.4347 48.8507 24.1058 48.8507 23.7486V17.5884H50.8524V23.65C50.8524 23.6688 50.8618 23.6876 50.8806 23.7063C50.8994 23.7251 50.9182 23.7345 50.937 23.7345H55.0673C55.0861 23.7345 55.1049 23.7251 55.1237 23.7063C55.1424 23.6876 55.1518 23.6688 55.1518 23.65V17.5884H57.1536V26.723C57.1536 27.0895 57.0643 27.4232 56.8857 27.7239C56.7166 28.0246 56.4769 28.2643 56.1668 28.4428C55.8661 28.6214 55.5325 28.7106 55.1659 28.7106H50.1757ZM58.6699 25.7363V17.5602H68.6503C69.0262 17.5602 69.3645 17.6542 69.6653 17.8422C69.966 18.0207 70.2056 18.2604 70.3842 18.5611C70.5627 18.8618 70.652 19.1907 70.652 19.5478V25.7363H68.6503V19.6465C68.6503 19.6277 68.6409 19.6089 68.6221 19.5901C68.6127 19.5713 68.5939 19.5619 68.5657 19.5619H65.7605C65.7323 19.5619 65.7088 19.5713 65.69 19.5901C65.6806 19.6089 65.6759 19.6277 65.6759 19.6465V25.7363H63.6601V19.6465C63.6601 19.6277 63.6507 19.6089 63.6319 19.5901C63.6131 19.5713 63.5943 19.5619 63.5755 19.5619H60.7562C60.7374 19.5619 60.7186 19.5713 60.6998 19.5901C60.6904 19.6089 60.6857 19.6277 60.6857 19.6465V25.7363H58.6699ZM72.5063 25.7363V15.5867H81.8665V17.6307H74.5644V19.6324H80.4427V21.6905H74.5644V25.7363H72.5063ZM84.5964 25.7363C84.2393 25.7363 83.9104 25.647 83.6096 25.4684C83.3089 25.2805 83.0646 25.0361 82.8766 24.7354C82.6981 24.4347 82.6088 24.1058 82.6088 23.7486V14.8678H84.6246V23.65C84.6246 23.6688 84.634 23.6876 84.6528 23.7063C84.6716 23.7251 84.6904 23.7345 84.7092 23.7345H86.3162V25.7363H84.5964ZM89.4286 25.7363C89.0715 25.7363 88.7379 25.647 88.4278 25.4684C88.127 25.2805 87.8874 25.0361 87.7088 24.7354C87.5303 24.4347 87.441 24.1058 87.441 23.7486V17.5602H89.4427V23.65C89.4427 23.6688 89.4521 23.6876 89.4709 23.7063C89.4897 23.7251 89.5085 23.7345 89.5273 23.7345H93.6435C93.6623 23.7345 93.6811 23.7251 93.6999 23.7063C93.7187 23.6876 93.7281 23.6688 93.7281 23.65V17.5602H95.7302V23.7486C95.7302 24.1058 95.6409 24.4347 95.4624 24.7354C95.2838 25.0361 95.0442 25.2805 94.7434 25.4684C94.4427 25.647 94.1091 25.7363 93.7422 25.7363H89.4286ZM98.8719 25.7363C98.5147 25.7363 98.1858 25.647 97.8851 25.4684C97.5844 25.2805 97.34 25.0361 97.1521 24.7354C96.9735 24.4347 96.8842 24.1058 96.8842 23.7486V19.5478C96.8842 19.1907 96.9735 18.8618 97.1521 18.5611C97.34 18.2604 97.5844 18.0207 97.8851 17.8422C98.1858 17.6542 98.5147 17.5602 98.8719 17.5602H103.185C103.552 17.5602 103.886 17.6542 104.186 17.8422C104.487 18.0207 104.727 18.2604 104.905 18.5611C105.084 18.8618 105.173 19.1907 105.173 19.5478V22.6632H98.886V23.65C98.886 23.6688 98.8954 23.6876 98.9142 23.7063C98.933 23.7251 98.9517 23.7345 98.9705 23.7345H105.173V25.7363H98.8719ZM98.886 20.8729H103.171V19.6465C103.171 19.6277 103.162 19.6089 103.143 19.5901C103.124 19.5713 103.106 19.5619 103.087 19.5619H98.9705C98.9517 19.5619 98.933 19.5713 98.9142 19.5901C98.8954 19.6089 98.886 19.6277 98.886 19.6465V20.8729ZM106.686 25.7363V17.5602H112.987C113.354 17.5602 113.687 17.6542 113.988 17.8422C114.289 18.0207 114.529 18.2604 114.707 18.5611C114.886 18.8618 114.975 19.1907 114.975 19.5478V25.7363H112.973V19.6465C112.973 19.6277 112.964 19.6089 112.945 19.5901C112.936 19.5713 112.917 19.5619 112.889 19.5619H108.772C108.754 19.5619 108.735 19.5713 108.716 19.5901C108.697 19.6089 108.688 19.6277 108.688 19.6465V25.7363H106.686ZM118.117 25.7363C117.759 25.7363 117.431 25.647 117.13 25.4684C116.829 25.2805 116.585 25.0361 116.397 24.7354C116.218 24.4347 116.129 24.1058 116.129 23.7486V19.5478C116.129 19.1907 116.218 18.8618 116.397 18.5611C116.585 18.2604 116.829 18.0207 117.13 17.8422C117.431 17.6542 117.759 17.5602 118.117 17.5602H124.404V19.5619H118.215C118.196 19.5619 118.178 19.5713 118.159 19.5901C118.14 19.6089 118.131 19.6277 118.131 19.6465V23.65C118.131 23.6688 118.14 23.6876 118.159 23.7063C118.178 23.7251 118.196 23.7345 118.215 23.7345H124.418V25.7363H118.117ZM127.56 25.7363C127.203 25.7363 126.874 25.647 126.574 25.4684C126.273 25.2805 126.029 25.0361 125.841 24.7354C125.662 24.4347 125.573 24.1058 125.573 23.7486V19.5478C125.573 19.1907 125.662 18.8618 125.841 18.5611C126.029 18.2604 126.273 18.0207 126.574 17.8422C126.874 17.6542 127.203 17.5602 127.56 17.5602H131.874C132.24 17.5602 132.574 17.6542 132.875 17.8422C133.176 18.0207 133.415 18.2604 133.594 18.5611C133.772 18.8618 133.862 19.1907 133.862 19.5478V22.6632H127.574V23.65C127.574 23.6688 127.584 23.6876 127.603 23.7063C127.621 23.7251 127.64 23.7345 127.659 23.7345H133.862V25.7363H127.56ZM127.574 20.8729H131.86V19.6465C131.86 19.6277 131.85 19.6089 131.832 19.5901C131.813 19.5713 131.794 19.5619 131.775 19.5619H127.659C127.64 19.5619 127.621 19.5713 127.603 19.5901C127.584 19.6089 127.574 19.6277 127.574 19.6465V20.8729ZM135.251 25.7363V19.5478C135.251 19.1907 135.34 18.8618 135.518 18.5611C135.706 18.2604 135.951 18.0207 136.251 17.8422C136.562 17.6542 136.895 17.5602 137.252 17.5602H141.777V19.5619H137.337C137.318 19.5619 137.299 19.5713 137.28 19.5901C137.262 19.6089 137.252 19.6277 137.252 19.6465V25.7363H135.251Z" fill="white"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_1_2949">
      <rect width="142" height="36" fill="white" transform="translate(3.05176e-05 0.5)"/>
      </clipPath>
      <clipPath id="clip1_1_2949">
      <rect width="142" height="36.0874" fill="white" transform="translate(3.05176e-05 0.456314)"/>
      </clipPath>
      </defs>
      </svg>
      </div>

 {/* Menú hamburguesa */}
 <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Enlaces y Botón (Agrupados) */}
      <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#feature">Our Features</a></li>
          <li><a href="#works">How it works</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#Faqs">Faqs</a></li>
        </ul>
        {/* Botón Join Us */}
{/* Botón Join Us */}
    <div className="navbar-button">
      <button onClick={() => window.location.href = "#"}>Join us now</button>
    </div>

      </div>
    </nav>
  );
};

export default Navbar;