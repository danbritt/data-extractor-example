const axios = require('axios');

	let agUsername = '';
	let agPass = '';
  
	let featureCollection = {
		layerDefinition: {
			geometryType: 'esriGeometryPoint',
			drawingInfo: {
				renderer: {
					type: 'simple',
					symbol: {
						color: [34, 114, 162, 128],
						size: 6,
						angle: 0,
						xoffset: 0,
						yoffset: 0,
						type: 'esriSMS',
						style: 'esriSMSCircle',
						outline: {
							color: [34, 114, 162, 255],
							width: 1,
							type: 'esriSLS',
							style: 'esriSLSSolid',
						},
					},
				},
			},
			spatialReference: { wkid: 4326 },
			fields: [
				{
					name: 'Name',
					alias: 'Name',
					type: 'esriFieldTypeString',
					wfsNamespace: 'http://www.w3.org/2001/XMLSchema',
				},
				{ name: 'id', type: 'esriFieldTypeGlobalID' },
			],
		},
		featureSet: {
			geometryType: 'esriGeometryPoint',
			spatialReference: { wkid: 4326 },
			features: [
				{
					attributes: {
						Name: 'Test1',
						id: 'A034EB7A-5233-446E-829A-BB78998D4A50',
					},
					geometry: {
						x: -94.48588519,
						y: 37.15514776,
						spatialReference: { wkid: 4326 },
					},
				},
				{
					attributes: {
						Name: 'Test2',
						id: 'ED343E5A-771D-44B3-A28A-12E7635F8FEC',
					},
					geometry: {
						x: -94.48588519,
						y: 37.15514776,
						spatialReference: { wkid: 4326 },
					},
				},
			],
		},
	};
  
	axios({
		method: 'get',
		url: 'https://www.arcgis.com/sharing/generateToken',
		params: {
			username: agUsername,
			password: agPass,
			referer: 'http://www.arcgis.com',
			f: 'json',
		},
	}).then((res) => {
		let token = res.data.token;
		
		return axios({
			method: 'post',
			url:
				'https://analysis5.arcgis.com/arcgis/rest/services/tasks/GPServer/ExtractData/submitJob',
			headers: { Referer: 'http://www.arcgis.com' },
			data: {
				f: 'json',
				inputLayers: [featureCollection],
				clip: false,
				dataFormat: 'FILEGEODATABASE',
				outputName: {
					itemProperties: {
						title: 'data-extraction-example',
						description:
							'File generated from running the Extract Data solution.',
						tags: 'Analysis Result, Extract Data',
						snippet: 'Analysis File item generated from Extract Data',
						folderId: '',
					},
				},
				token: token,
			},
		});
	}).then((res) => {
		console.log('JOB RESPONSE');
		console.log(res);
	});