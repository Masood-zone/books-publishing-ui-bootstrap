// Bootstrap form validation script with toast notification
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // Show toast notification on successful form submission
          var toastEl = document.getElementById("submissionToast");
          var toast = new bootstrap.Toast(toastEl);
          toast.show();

          // Clear the form fields after submission
          form.reset();
          form.classList.remove("was-validated");

          // Prevent the form's default submit action to demo the toast notification
          event.preventDefault();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
