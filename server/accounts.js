ServiceConfiguration.configurations.remove({
   service: 'facebook'
});

ServiceConfiguration.configurations.insert({
   service: "facebook",
   appId: "1487380874860242",
   secret: "8eb9ccd98b3ce11d88d95f94784031a5"
});

ServiceConfiguration.configurations.remove({
   service: 'twitter'
});

ServiceConfiguration.configurations.insert({
  service: "twitter",
  consumerKey: "Vr6qail9iqR8cye06ewuyg885",
  secret: "sTuJrnGohnNPDLHXyZoNdYb4iUORFmKSzJOBGsL9DlCylvGF8I"
});


// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
   service: 'google'
});

ServiceConfiguration.configurations.insert({
  service: "google",
  clientId: "566347584725-mcis0o1gfv9e21r3of0mdfauul6cssp7.apps.googleusercontent.com",
  secret: "1G0rAPhiAcdI1-cwPfp9GjNb"
});
