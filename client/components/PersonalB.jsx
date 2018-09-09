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
    <h4>Learning to learn</h4>
<p>
    Learning to learn is a great skill that isn't acquired naturally for most people. We can all learn, but there's true power in finding 
    what helps you learn best. I've noticed when learning new concepts it no longer takes an entire day. I can apply myself to the subject 
    and in a few hours time, find myself teaching others how to better understand that same topic. I'm never afraid to learn new things and 
    continually reflect on my progress towards goals that I've set for learning new content.
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
export default PersonalB