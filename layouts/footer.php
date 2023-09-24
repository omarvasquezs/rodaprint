    <!-- Contact modal -->
    <div class="container">
        <!-- Modal Popup -->
        <div class="modal fade" id="contactanos" tabindex="-1" aria-labelledby="contactanosModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="contactanosModalLabel">Envienos un mensaje</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="contactForm" method="post" action="send_email.php">
                            <div class="mb-3">
                                <label for="name" class="form-label">Nombres</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Correo</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="tel" class="form-label">Telefono</label>
                                <input type="tel" class="form-control" id="telephone" name="telephone" required>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Mensaje</label>
                                <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                            </div>
                            <div class="g-recaptcha" data-sitekey="6LdwdU4oAAAAAO3hzxIBLKqi5DwnffGaNmFm27S7"></div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" class="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End modal -->
    <!-- Start Google Map -->
    <div class="container-fluid mb-5">
        <div class="row">
            <div class="col-12 px-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3901.5727809820823!2d-77.0034776!3d-12.0728883!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c625f5c8cdf3%3A0x3385f382168f0bf6!2sRodaPrint!5e0!3m2!1ses!2spe!4v1694834066377!5m2!1ses!2spe" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <!-- End Google Map -->
    <!-- Start footer -->
    <footer class="footer">
        <div class="container mb-5">
            <div class="row">
                <!-- Column 1: Social Icons -->
                <div class="col-md-4 col-sm-12 mb-4 text-center">
                    <h4>SIGUENOS EN:</h4>
                    <div class="d-flex justify-content-center">
                        <!-- Add your social icons here, e.g., Font Awesome icons -->
                        <a class="pe-4" href="https://www.facebook.com/RodaPrintPeru" target="_blank"><img src="assets/images/facebook_icon.png" alt="Facebook"></a>
                        <a href="https://www.instagram.com/rodaprint" target="_blank"><img src="assets/images/instagram_icon.png" alt="Instagram"></a>
                    </div>
                </div>
                <!-- Column 2: Logo -->
                <div class="col-md-4 col-sm-12 mb-4 text-center order-3 order-md-2">
                    <!-- Replace the src attribute with your logo image URL -->
                    <img src="assets/images/logo.jpg" alt="Logo" class="img-responsive center-block">
                </div>
                <!-- Column 3: Address -->
                <div class="col-md-4 col-sm-12 mb-4 text-center order-2 order-md-3">
                    <h4>CONTACTANOS</h4>
                    <p>RodaPrint S.A.</p>
                    <p>Av Nicolas Arriola #2000 Int 15, San Luis</p>
                    <p>Lima, Peru</p>
                    <p>Correo: <a href="mailto:gerencia@rodaprint.com.pe">gerencia@rodaprint.com.pe</a></p>
                    <p>Teléfono: <a href="tel:51945325508">945 325 508</a></p>
                </div>
            </div>
        </div>
    </footer>
    <!-- End footer -->
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <!-- JQUERY -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <!-- CHAT WIDGET JS -->
    <script src="libraries/contactus/js/jquery.contactus.mine606.js?version=1.7.9" defer></script>
    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <!-- Custom js -->
    <script type="text/javascript" src="themes/rodaprint_custom/theme.js"></script>
</body>
</html>
