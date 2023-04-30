const userAction = async () => {
    const response = await fetch('function', {
      method: 'POST',
      body: myBody, 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json();
    
  }