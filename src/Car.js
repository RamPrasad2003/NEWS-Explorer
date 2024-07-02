import React from "react";
class Car extends React.Component {
    render() {
        return (

            <div>
                <header class="header">
                    <a href="#" class="logo">Portfolio</a>

                    <div class="navbar">
                        <a href="#home" style="--i:1" class="active">Home</a>
                        <a href="#about" style="--i:2">About</a>
                        <a href="#" style="--i:3">Skill</a>
                        <a href="#" style="--i:4">Portfolio</a>
                        <a href="#" style="--i:5">Contact</a>
                    </div>
                </header>
                <section class="home" id="home">
                    <div class="home-content">
                        <h3>Hello, It's Me</h3>
                        <h1>Ram Prasad Chippada</h1>
                        <h3>And I'm a <span class="text"></span></h3>
                        <p>I'm a Data Science Student
                            <br /> expertise in AIML and FrontEnd Developer
                        </p>
                        <div class="home-sci">
                            <a href="#" style="--i:6" class="bx bxl-facebook"></a>
                            <a href="#" style="--i:7" class="bx bxl-instagram"></a>
                            <a href="#" style="--i:8" class="bx bxl-linkedin"></a>
                            <a href="#" style="--i:9" class="bx bxl-whatsapp"></a>
                        </div>
                        <a href="#" class="btn-box">More About Me</a>
                    </div>
                    <span class="home-imghover"></span>
                </section>
                </div>
                );
    }
}
                export default Car;