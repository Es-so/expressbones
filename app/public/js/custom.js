(function(window)
{
  //you are here in an autoloading function. its a good idea to do that :)
  //https://sarfraznawaz.wordpress.com/2012/01/26/javascript-self-invoking-functions/
  //your client-side lib code here :)

  document.querySelectorAll('form').forEach(function(form)
  {
    form.addEventListener('submit',function(event)
    {
      event.preventDefault();
      
      var AxiosReq =
      {
        method: event.target.method,
        url:    event.target.action,
        data:   {}
      };
      
      for(elem in event.target.elements)
      {
        if(event.target.elements[elem].nodeName == 'INPUT')
          AxiosReq.data[event.target.elements[elem].name] = event.target.elements[elem].value;
      }
      
      console.log(AxiosReq,' is prepared');
      axios(AxiosReq).then(function(res)
      {
        console.log('res: ',res);
        if(res.data.redirect)
          location.href = res.data.redirect;
      });
    })
  })


})(window);