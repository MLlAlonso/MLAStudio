<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <title>Payments</title>
  <link rel="icon" href="../../assets/img/Mikkel/Ml.png">
  <link rel="stylesheet" href="../../assets/styles/Mikkel/pagos.css" />
</head>

<body>

  <div class="card">
    <h2>Pago MLASTUDIO</h2>
    <input type="number" id="amount" placeholder="Monto en MXN" min="10">
    <button onclick="pay()">Pagar</button>
  </div>

  <script>
    async function pay() {
      const amount = document.getElementById("amount").value;

      const res = await fetch("https://stripe-api-amber.vercel.app/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount
        })
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Error al iniciar pago");
      }
    }
  </script>

</body>

</html>