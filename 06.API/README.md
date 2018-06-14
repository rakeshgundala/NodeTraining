

Few Principles of REST
1. Resource: data to be represented by a specific format. Resources are referred by content-type. 
    Examples of content type are
    data format  | content Type
    ------------ | -------------
    JPEG Images  |  image/jpeg
    MPEG videos  |  video/mpeg
    html         |  text/html
    xml and text |  text/xml
    binary       |  application/octet-stream

2. URI:
    
3. HTTP Methods: There are 8 HTTP actions/Verbs.
    * GET
    * POST
    * PUT
    * DELETE
    * HEAD
    * OPTIONS
    * TRACE
    * CONNECT
    The First Four verbs are analogous to CRUD(**C**reate, **R**ead, **U**pdate and **D**elete) operations on databases

    HTTP Response status codes
    - 200 - OK
    - 400 - 


4. Mulitpe Representations: A resource can have multiple formats. 
    Example a xml can be trasnfromed to JSON.using Accept HTTP header
    <open google website in chrome to see network section on Developer Tools />
5. RESTful API - (Sateless)

### Node can used for creating REST APIs.