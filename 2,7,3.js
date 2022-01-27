let obj = {
        'key1': 'value1',
        'key2': 'value2',
        'key3': 'value3',
        'key4': 'value4'
    }
    Object.keys(obj).map(function(k){ 
    console.log("key with value: "+k +" = "+obj[k])    
    
    })