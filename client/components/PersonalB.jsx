import React from 'react'

class PersonalB extends React.Component {
   
    constructor (props){
   
        super(props)
    this.state = {}
    console.log(props);
    
}
render()
{  return (
    <div>
        <div class="container is-fluid">
        <h2 onClick={this.props.func} id="pbTitle">Personal Blog Topics <i alt="Technical" id="arrow"  class="fas fa-arrow-right arrow1"></i>



</h2>
<div class="columns">
  <div class="column">
    <section>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
    </section>
  </div>
  <div class="column">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</div>
</div>
</div></div>

  )
}
}
export default PersonalB