import CartWidget from "./CartWidget";

const Navbar = () => {
    return(
      <>
      <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
      <h1>Cloudify</h1>
          <span class="navbar-toggler-icon"></span>
    </div>
    <CartWidget/>
    </nav>
    

    </>
    )
}
export default Navbar;

