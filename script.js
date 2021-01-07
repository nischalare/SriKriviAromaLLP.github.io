document.addEventListener('DOMContentLoaded', (event) => {
            document.getElementById('contact-form').addEventListener('submit', submitForm);
            function submitForm(e){
                e.preventDefault();
                console.log('Thank You');
            }
        });
