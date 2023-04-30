const userAction = async () => {
    const response = await fetch('functionService');
    const myJson = await response.json(); 
    
}