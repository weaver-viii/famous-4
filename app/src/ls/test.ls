test-suite = ->
  try 
    return true
  catch
    console.log e.message
    return false