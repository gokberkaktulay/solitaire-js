function onDragStart(event) {
    console.log('hello');
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  
    event
      .currentTarget
      .style
      .backgroundColor = 'yellow';
}

console.log("a");