export const header = () => {
    return `<header class="header">
    <div class="container">
        <ul class="social-icons pt-3">
            <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-facebook" aria-hidden="true"></i></a></li>
            <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
            <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
            <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
            <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-github" aria-hidden="true"></i></a></li>
        </ul>  
        <div class="header-content">
            <h4 class="header-subtitle" >Hello, I am</h4>
            <h1 class="header-title">Hung Le</h1>
            <h6 class="header-mono" >Frond end Designer | Developer</h6>
            <button class="btn btn-primary btn-rounded"><i class="ti-printer pr-2"></i>Print Resume</button>
        </div>
    </div>
</header>
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
    <div class="container">
        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a href="#home" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#about" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="#resume" class="nav-link">Resume</a>
                </li>
            </ul>
            <ul class="navbar-nav brand">
                <img src="src/imgs/ava.jpg" alt="" class="brand-img">
                <li class="brand-txt">
                    <h5 class="brand-title">Hung Le</h5>
                    <div class="brand-subtitle">Web Designer | Developer</div>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="#portfolio" class="nav-link">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a href="#blog" class="nav-link">Blog</a>
                </li>
                <li class="nav-item last-item">
                    <a href="#contact" class="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;

};
