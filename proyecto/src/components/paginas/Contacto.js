import React from 'react'

const Contacto = () => {
  return (
    <div>

<div class="mx-5">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mx-5">
  <label for="exampleFormControlTextarea1" class="form-label">Sugerencias</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" class="btn btn-primary">Enviar</button>

    </div>
  )
}

export default Contacto