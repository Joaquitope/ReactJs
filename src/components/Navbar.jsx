const Navbar = () => {
    return(
      <>
      <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <h1>CODERNETA</h1>
          <span class="navbar-toggler-icon"></span>
        
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="listadoItems">
            <a className="items" href="#">Productos</a>
            <a className="items" href="#">Quienes somos</a>
            <a className="items" href="#">Ubicación</a>
            <div className="cartWidget"><i class="fa-solid fa-2x fa-cart-shopping"  href="#"></i> </div>
          </div>
        </div>
      </div>
    </nav>
    </>
    )
}
export default Navbar;