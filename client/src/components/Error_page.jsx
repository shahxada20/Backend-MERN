import { NavLink } from "react-router-dom";
import "../styles/Error.css";

const Error_page = () => {
    return (
        <>
            <section id="error-page">
                <div className="container content">
                    <h2 className="header">404</h2>
                    <h4>Sorry! Page Not Found</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tenetur nostrum. Magni fuga ducimus recusandae nemo eveniet saepe fugit sit atque, consequatur sapiente harum odit! Dignissimos consectetur commodi nemo expedita.
                        At doloremque, laboriosam vitae autem sit est impedit eos rem molestiae ad reprehenderit quas magni magnam libero in tempora nisi corrupti aperiam distinctio aliquid quam veniam, sed ullam. Id, incidunt.
                        Labore provident magni tenetur! Perspiciatis, deserunt cum tempora beatae magni laudantium totam officia eius omnis id quisquam dolor deleniti quos unde! Minima animi neque eum quod ducimus doloremque nam dicta!
                        Nobis dolorem, maxime voluptatum incidunt sint, enim ab totam praesentium eveniet culpa accusantium optio. Ducimus hic excepturi libero odio quae accusamus. Natus temporibus amet tempore. Cupiditate doloremque obcaecati dicta maiores?
                    </p>
                    <div className="btns">
                        <NavLink to="/" className="btn">Return Home</NavLink>
                        <NavLink to="/contact" className="btn">Report Problem</NavLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Error_page;
