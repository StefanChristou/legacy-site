//	HYPE.documents["style"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "style.hyperesources";
	var documentName = "style";
	var documentLoaderFilename = "style_hype_generated_script.js";
	var mainContainerID = "style_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"7":{n:"close-button-big.png",p:1},"3":{n:"Japan%20guy-H.264%205Mbps%20MPEG-4%201024x768%2048kHz.mp4"},"4":{n:"Black%20guy-H.264%205Mbps%20MPEG-4%201024x768%2048kHz.mp4"},"0":{n:"style_01-1.png",p:1},"5":{n:"loader-v3.png",p:1},"1":{n:"style_02-1.png",p:1},"6":{n:"Pink%20girl-H.264%205Mbps%20MPEG-4%201024x768%2048kHz.mp4"},"2":{n:"style_03-1.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:0}],v:{"C39B59ED-3A1A-4983-B644-D08D102AABE7-1233-00000F670336B906":{c:1024.1600000000001,d:766.35199999999998,I:"Solid",J:"Solid",K:"Solid",g:"#FFFFFF",L:"Solid",M:1,i:"C39B59ED-3A1A-4983-B644-D08D102AABE7-1233-00000F670336B906",N:1,A:"#FFFFFF",x:"visible",j:"absolute",B:"#FFFFFF",P:1,k:"div",O:1,z:"2",C:"#FFFFFF",D:"#FFFFFF",a:-0.46875,b:1.98047},"535F4B03-5F16-4EFB-BA51-FB54DB132F71-1233-00000F1084A30EB1":{o:"content-box",h:"1",x:"visible",a:380,q:"100% 100%",i:"535F4B03-5F16-4EFB-BA51-FB54DB132F71-1233-00000F1084A30EB1",j:"absolute",r:"inline",aA:[{type:1,transition:7,sceneOid:"7670FE92-A65D-466E-96AE-7E35650F54AB-1233-00000EABA9D29DD2"}],k:"div",c:319,d:768,z:"5",b:-16,aP:"pointer"},"4EA513A4-F3CF-4A72-B4AB-AD35FD3AC3CF-1233-00000F1084140410":{o:"content-box",h:"0",x:"visible",a:16,q:"100% 100%",i:"4EA513A4-F3CF-4A72-B4AB-AD35FD3AC3CF-1233-00000F1084140410",j:"absolute",r:"inline",aA:[{type:1,transition:4,sceneOid:"A7D8AE19-FAAE-4094-97E4-32468DD21CDA-1233-00000EABFDC6AFB3"}],k:"div",c:364,d:768,z:"4",b:-16,aP:"pointer"},"84E6D75A-13E1-4782-9DFD-4A918E132240-1233-00000E993AD94374":{aV:8,w:"{\n    \"self.location.href\" = \"the_doc_s1.html\";\n}",x:"visible",a:467,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"1",k:"div",i:"84E6D75A-13E1-4782-9DFD-4A918E132240-1233-00000E993AD94374",aT:8,b:365,aS:8,aU:8},"C9F5A630-C4CB-47AA-B786-DB8A0C023A33-1233-00000F108526ED9B":{o:"content-box",h:"2",x:"visible",a:699,q:"100% 100%",i:"C9F5A630-C4CB-47AA-B786-DB8A0C023A33-1233-00000F108526ED9B",j:"absolute",r:"inline",aA:[{type:1,transition:5,sceneOid:"E88946F7-792F-4F96-AD21-BADBC83818A1-1233-00000EA7CDF3C48A"}],k:"div",c:341,d:768,z:"3",b:-16,aP:"pointer"}},n:"styleMain",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"2C7E0085-6E3C-49D5-B6D3-765BD7F48EE9-1233-00000E8EDC62508C"},{x:1,p:"600px",c:"#000000",onSceneTimelineCompleteActions:[{type:0}],v:{"60BF9210-4D85-425C-A620-8EC26067840B-1233-00000F4968E824DD":{aH:"1",aR:"0",x:"visible",bE:[{type:"video/mp4",filename:"6"}],a:0,i:"60BF9210-4D85-425C-A620-8EC26067840B-1233-00000F4968E824DD",j:"absolute",b:0,c:1024,k:"video",z:"2",d:768,aO:"1",aQ:"0",bD:"auto"},"30":{o:"content-box",h:"5",x:"visible",a:469,q:"100% 100%",b:346,j:"absolute",r:"inline",c:85,k:"div",z:"1",d:75,aY:"0",f:"0deg"},"41":{o:"content-box",h:"7",x:"visible",a:8,q:"100% 100%",b:8,j:"absolute",r:"inline",aA:[{type:1,transition:2,sceneOid:"2C7E0085-6E3C-49D5-B6D3-765BD7F48EE9-1233-00000E8EDC62508C"}],k:"div",c:42,d:42,z:"4",aP:"pointer"}},n:"girl",onSceneLoadActions:[{type:4,javascriptOid:"3"},{timelineIdentifier:"23",type:3}],T:{"23":{d:1.29,i:"23",n:"circles",a:[{f:"1",t:0,d:1.29,i:"f",e:"359deg",s:"0deg",o:"30"},{f:"1",t:1.29,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"23",type:9,goToTime:0}],o:"23"}],f:30},kTimelineDefaultIdentifier:{d:10,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:10,o:"60BF9210-4D85-425C-A620-8EC26067840B-1233-00000F4968E824DD",f:"2"}],f:30}},o:"A7D8AE19-FAAE-4094-97E4-32468DD21CDA-1233-00000EABFDC6AFB3"},{x:2,p:"600px",c:"#000000",v:{"85937C52-791F-4E31-9243-FCDB771E0584-1233-00000F4FF6F3DAB8":{aR:"0",x:"visible",i:"85937C52-791F-4E31-9243-FCDB771E0584-1233-00000F4FF6F3DAB8",bE:[{type:"video/mp4",filename:"4"}],a:0,j:"absolute",b:0,c:1024,k:"video",z:"3",d:768,aO:"1",aQ:"0",aH:"1"},"31":{o:"content-box",h:"5",x:"visible",a:469,q:"100% 100%",b:346,j:"absolute",r:"inline",c:85,k:"div",z:"2",d:75,aY:"0",f:"0deg"},"43":{o:"content-box",h:"7",x:"visible",a:8,q:"100% 100%",b:8,j:"absolute",r:"inline",aA:[{type:1,transition:2,sceneOid:"2C7E0085-6E3C-49D5-B6D3-765BD7F48EE9-1233-00000E8EDC62508C"}],k:"div",c:42,d:42,z:"4",aP:"pointer"}},n:"boy1",onSceneLoadActions:[{type:4,javascriptOid:"4"},{timelineIdentifier:"20",type:3}],T:{"20":{d:1.29,i:"20",n:"circles",a:[{f:"1",t:0,d:1.29,i:"f",e:"359deg",s:"0deg",o:"31"},{f:"1",t:1.29,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"20",type:9,goToTime:0}],o:"20"}],f:30},kTimelineDefaultIdentifier:{d:10,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:10,o:"85937C52-791F-4E31-9243-FCDB771E0584-1233-00000F4FF6F3DAB8",f:"2"}],f:30}},o:"7670FE92-A65D-466E-96AE-7E35650F54AB-1233-00000EABA9D29DD2"},{x:3,p:"600px",c:"#000000",v:{"32":{o:"content-box",h:"5",x:"visible",a:469,q:"100% 100%",b:346,j:"absolute",r:"inline",c:85,k:"div",z:"1",d:75,aY:"0",f:"0deg"},"44":{o:"content-box",h:"7",x:"visible",a:8,q:"100% 100%",b:8,j:"absolute",r:"inline",aA:[{type:1,transition:2,sceneOid:"2C7E0085-6E3C-49D5-B6D3-765BD7F48EE9-1233-00000E8EDC62508C"}],k:"div",c:42,d:42,z:"3",aP:"pointer"},"2FA15F4E-5B6F-4FE1-B374-ED36D7475DB9-1233-00000F4D8E344B4C":{aR:"0",x:"visible",i:"2FA15F4E-5B6F-4FE1-B374-ED36D7475DB9-1233-00000F4D8E344B4C",bE:[{type:"video/mp4",filename:"3"}],a:0,j:"absolute",b:0,c:1024,k:"video",z:"2",d:768,aO:"1",aQ:"0",aH:"1"}},n:"boy2",onSceneLoadActions:[{type:4,javascriptOid:"5"},{timelineIdentifier:"16",type:3}],T:{"16":{d:1.29,i:"16",n:"circles",a:[{f:"1",t:0,d:1.29,i:"f",e:"359deg",s:"0deg",o:"32"},{f:"1",t:1.29,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"16",type:9,goToTime:0}],o:"16"}],f:30},kTimelineDefaultIdentifier:{d:10,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:10,o:"2FA15F4E-5B6F-4FE1-B374-ED36D7475DB9-1233-00000F4D8E344B4C",f:"2"}],f:30}},o:"E88946F7-792F-4F96-AD21-BADBC83818A1-1233-00000EA7CDF3C48A"}];
	
	var javascripts = [{name:"girlToStyleMain",source:"function(hypeDocument, element, event) {var video = document.getElementById(\"60BF9210-4D85-425C-A620-8EC26067840B-1233-00000F4968E824DD\");\nvar goToMain = (function () {\nhypeDocument.showSceneNamed('styleMain', (hypeDocument.kSceneTransitionCrossfade));\n});\nvideo.addEventListener('ended', goToMain, false);\n}",identifier:"3"},{name:"boy1ToStyleMain",source:"function(hypeDocument, element, event) {\tvar video = document.getElementById(\"85937C52-791F-4E31-9243-FCDB771E0584-1233-00000F4FF6F3DAB8\");\n\tvar goToMain = (function () {\n\thypeDocument.showSceneNamed('styleMain', (hypeDocument.kSceneTransitionCrossfade));\n\t});\n\tvideo.addEventListener('ended', goToMain, false);\n}",identifier:"4"},{name:"boy2ToStyleMain",source:"function(hypeDocument, element, event) {\tvar video = document.getElementById(\"2FA15F4E-5B6F-4FE1-B374-ED36D7475DB9-1233-00000F4D8E344B4C\");\n\tvar goToMain = (function () {\n\thypeDocument.showSceneNamed('styleMain', (hypeDocument.kSceneTransitionCrossfade));\n\t});\n\tvideo.addEventListener('ended', goToMain, false);\n}",identifier:"5"}];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(true);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

