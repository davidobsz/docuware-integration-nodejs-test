const express = require('express');
const app = express();
var request = require('request');
const ejs = require('ejs');
// for returning html files
const path = require('path');


// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/'));





// Define routes
app.get('/', (req, res) => {
    
    options = {
        'method': 'GET',
        'url': 'https://ams-automated-messaging-systems-ltd.docuware.cloud/DocuWare/Platform/FileCabinets/c0c48893-92e5-4894-8dc3-5220936991ee/Documents',
        'headers': {
          'Accept': 'application/xml',
           }
      };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        var responses = ""
        console.log(response.body);
        responses = response.body;

        
        res.render('index', { responses });
      });

});

app.get('/about', (req, res) => {

  var docid = req.query.docid || 0;
  var options = {
    'method': 'GET',
    'url': `https://ams-automated-messaging-systems-ltd.docuware.cloud/DocuWare/Platform/FileCabinets/c0c48893-92e5-4894-8dc3-5220936991ee/Documents/${docid}`,
    'headers': {
      'Accept': 'application/xml',
      'Cookie': '.DWPLATFORMAUTH=2BD102C0A329C34E15D0B5F836385C69C61326389739E866534AF2C904F3CC5C5689666144DB02D4ACF2C74468F2ECE5919C4FD45C322D472F8C6D6BDAC4BCA04A86C58083DABD87F27DF07D1C67D59AD6385B3119BC6BB60EBC3776BFC657A230DF630753FAF376824764244D9D9CECF34720AD582B538F99CE088E502CE057E3F5997000545069D80409EDDB8A51CF6DB14F2D7F127237A7F4861EA83E43DB1DA52B65DD74A0B792FD8D5DE173156835185D9D9A3A76E3B1CDF4CFD0B4BE76AC32F5F0C39F719CBBEBAAFBDCCEF73DC4D1A325F0DF224AF42AAD7D1B6BDECE46DB51EE672F9C20226FEC4EE4A16998F66A80C20B67EA1B31D47F3F9734C5BF398DA82FBA5132E2491639403D279CF83772AA6EB28C14F69B4860879F4078F051FF179E0F2355E2A482702347141990ECEE3A0329C30EBB7575A8305D7B0DEC4F8F79F6E2E4F4FC0FDE62BD3534030085E9B2B60DE7E89DD5FA9CD35A0113FDEC9F5F5A8DE89F9AAF80E94F46EAA1276B5D8E4DD1A568F443A22B5A226C03C8D36D3DAD04B6367A1FE6FF8FCC57055C; DWPLATFORMBROWSERID=BCA381F3E90C9A14DA0B078655395510BA4BD84D6DDADF4106ABBB5D044080E8E3DD75EE58FACA25B1B635AA27954EB0DE6670A7CC1EF99682703A68D9FE17133EE028C68356A9FECC41B4CCF917D9B211E0C96DB484B9525374B2AA00457EC3B25D55EE5CD0C02C243087A602F3C72395EAB7639223B3E6A71AF90F5CB1815B7C4467B77B8970813D00EC7617702BB7ABC0BD65597F5F5F1E07C63FE25743BE4F56343BA3CBBED3D57B568BE88302B7016091CA4E5DCD76F8841DE45E0A821E84C1A6EDC1EAB17A08C17189388C40AC; dwingressplatform=9f356eae103b71480407a6efbfb704fb|b0976c6496ea32ed0bbcecae5e7f58f0'
    }
  };
    
    request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    responses = response.body
    res.render('login', { responses });
    });
    
});

app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
