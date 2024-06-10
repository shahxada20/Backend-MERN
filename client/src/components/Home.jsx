import "../styles/Home.css";

const Home = () => {
    return (
        <>
            <main>
                <section className="hero-section">
                    <div className="container">
                        <div class="hero-content">
                            <div class="hero-image">
                                <img src="./src/assets/home.jpeg" alt="not available" width="400" height="500" />
                            </div>
                            <div class="hero-text">
                                <p>We are the world's best IT company</p>
                                <h1>Welcome to my portfolio website</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione minus cumque nobis iure, quos deleniti numquam cum earum. Qui odio tempora enim magnam repudiandae vel quos nam optio non maiores.
                                    Distinctio nobis laboriosam suscipit veniam at saepe ex, aut reiciendis quibusdam iusto! Corporis doloribus dolores atque neque eum mollitia? Assumenda fugit eum aliquid mollitia nisi iure qui at et dignissimos?
                                    Beatae animi laudantium atque nam veritatis eligendi optio similique, tempora sunt non dolore, cupiditate ipsum id fugit, repellat maxime consequatur? Voluptatum enim est beatae eaque autem reprehenderit, saepe laborum quos?
                                </p>
                                <div className="btn-group">
                                    <a href="/contact">
                                        <button className="btn">Connect Now</button>
                                    </a>
                                    <a href="/services">
                                        <button className="btn">Learn More</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;