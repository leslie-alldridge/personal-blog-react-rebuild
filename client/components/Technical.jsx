import React from 'react'

class Technical extends React.Component {
   
    constructor (props){
   
        super(props)
    this.state = {}
    console.log(props);
    
}
render()
{  return (
      <div> <div class="container is-fluid">
             <h2 onClick={this.props.func} id="pbTitle">Technical Blog Topics <i alt="Technical" id="arrow"  class="fas fa-arrow-right arrow1"></i>
</h2>

<div class="columns">
  <div class="column">
    <section>
    <h4>React and Redux</h4>
<p>
This website is 100% React and utlises both stateless and stateful components. I love the way React can be so flexible with its 
rendering and provide a simple but effective way to code. I love teaching others the difference between state and props and explaining
 the direction props goes throughout multiple layers of components. React is the most challenging language we learn at DevAcademy 
 so I've taken it upon myself to fall in love with React and learn everything I can about it. 
</p>
    </section>
  </div>
  <div class="column">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</div>
</div>

<div class="columns">
  <div class="column">
    <section>
    <h4>Mindfulness</h4>
<p> 
Enspiral Dev Academy has taught me the importantance of mindfulness in the workplace. It's not often we take five minutes to just 'be' and have a clear mind. 
This has helped my productivity and concentration levels improve so I can do my best work possible. Originally I thought of it as 
meditation and it was hard to incorporate into my daily routine. Now that I understand mindfulness can be a walk at lunch, five minutes outside in fresh air or solving 
a rubik's cube, I can continue to practice mindfulness throughout my day. 
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
export default Technical