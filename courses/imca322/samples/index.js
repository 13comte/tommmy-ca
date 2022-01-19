const samples =[ 
   // sample a_0001
   // technical sample for trace widths
{
  id: 'a_0001',
  status: 'In Production',
  description: 'Trace width sampler',
  observations: 'succesfully sampled',
  date: '2022-01-18',
  revision: '1.0',
  technique: 'Laser etched',
  material: 'Acrylic, cast',
  dimensions: '1.5 x 1.5 x 1.5',
    sample_images: [
      {
          id: 'a_0001_1',
          src: '../../media/images/AND_gate-2.svg',
          alt: 'Sample image 1',
          caption: 'Sample image 1'
      },
      {
          id: 'a_0001_2',
          src: '../../media/images/sample_images/a_0001_2.jpg',
          alt: 'Sample image 2'
      },
      {
          id: 'a_0001_3',
          src: '../../media/images/sample_images/a_0001_3.jpg',
          alt: 'Sample image 3'
      }
    ],
  sample_videos: [
     {
        id: 'a_0001_1',
        src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        alt: 'Sample video 1',
        caption: 'Sample video 1 caption',
        observations: 'Sample video 1 observations'
     }
  ],
  sample_documents: [
     {
        id: 'a_0001_1',
        src: '../../media/documents/pdf/a_0001_laserFile.pdf',
        alt: 'Sample document 1'
     },
     {
      id: 'a_0001_1',
      src: '../../media/documents/pdf/a_0001.pdf',
      alt: 'Sample document 1'
   }
  ]
},
// SAMPLE 0001
{
   id: '1001',
   description: 'Trace width sampler',
   date: '2022-01-18',
   revision: '1.0',
   technique: 'Laser etched',
   material: 'Acrylic, cast',
   dimensions: '1.5 x 1.5 x 1.5',
     sample_images: [
       {
           id: 'a_0001_1',
           src: '../../media/images/sample_images/a_0001_1.jpg',
           alt: 'Sample image 1',
           caption: 'test'
       },
       {
           id: 'a_0001_2',
           src: '../../media/images/sample_images/a_0001_2.jpg',
           alt: 'Sample image 2'
       },
       {
           id: 'a_0001_3',
           src: '../../media/images/sample_images/a_0001_3.jpg',
           alt: 'Sample image 3'
       }
     ],
   sample_videos: [
      {
         id: 'a_0001_1',
         src: '../../media/videos/sample_videos/a_0001_1.mp4',
         alt: 'Sample video 1'
      }
   ],
   sample_documents: [
      {
         id: 'a_0001_1',
         src: '../../media/documents/sample_documents/a_0001_1.pdf',
         documentType: 'pdf',
         alt: 'Sample document 1'
      }
   ]
 }
];

function populateSampleData() {
var nSamples = samples.length;
for (i=0; i<nSamples; i++) {
   var currentSample = samples[i];
   var div = document.createElement('div');
   div.className = "samplesData";
   div.id = currentSample.id;
   div.innerHTML = '<h3>' + currentSample.id + '</h3>' +
   '<p><span>Status<span class="emptyFill"></span></span>'+ currentSample.status + '</p>' +
                     '<p><span>Date<span class="emptyFill"></span></span>'+ currentSample.date + '</p>' +
                     '<p><span>Revision<span class="emptyFill"></span></span>' + currentSample.revision + '</p>' +
                     '<p><span>Technique<span class="emptyFill"></span></span>' + currentSample.technique + '</p>' +
                     '<p><span>Materials<span class="emptyFill"></span></span>' + currentSample.material + '</p>' +
                     '<p><span>Dimensions<span class="emptyFill"></span></span>' + currentSample.dimensions + '</p>'+
                     '<p><span>Description<span class="emptyFill"></span></span>' + currentSample.description + '</p>'+
                     '<p><span>Observations<span class="emptyFill"></span></span>' + currentSample.observations + '</p>'
                     ;
   document.getElementById('pageContent').appendChild(div);
   currentSample.hasOwnProperty('sample_images') ? populateImages(currentSample) : null;
   currentSample.hasOwnProperty('sample_videos') ? populateVideos(currentSample) : null;
   currentSample.hasOwnProperty('sample_documents') ? populateDocuments(currentSample) : null;
}
}


function populateImages(obj) {
   document.getElementById(obj.id).innerHTML += '<h3 id="'+obj.id+'">' + 'Sample Images' + '</h3>';
   var pictureDiv = document.createElement('div');
   pictureDiv.className = 'pictureFrame';
   pictureDiv.id = 'imageFrameEl';
   for (i=0; i<obj.sample_images.length; i++) {
      var fig = document.createElement('figure');
      var img = document.createElement('img');
      img.src = obj.sample_images[i].src;
      img.alt = obj.sample_images[i].alt;
      img.id = obj.sample_images[i].id;
      img.className = 'sampleImage';
      fig.appendChild(img);
      if (obj.sample_images[i].hasOwnProperty('caption')) {
         var figCaption = document.createElement('figcaption');
         figCaption.innerHTML = obj.sample_images[i].caption;
         fig.appendChild(figCaption);
      }
      pictureDiv.appendChild(fig);
   }
   document.getElementById('pageContent').appendChild(pictureDiv);
}


// create a div and fill video with object data
function populateVideos(obj) {
   var videoDiv = document.createElement('div');
   videoDiv.className = 'videoFrame samples';
   videoDiv.id = "videoFrameEl";
   videoDiv.innerHTML = '<h3>' + 'Sample Videos' + '</h3>'
   var breakDiv = document.createElement('div');
   breakDiv.className = 'break';
   videoDiv.appendChild(breakDiv);

   for (i=0; i<obj.sample_videos.length; i++) {
      var video = document.createElement('video');
// set video source and parameters
      video.id =obj.id+'_video'+i;
      video.className = 'sampleVideo';
      if (video.canPlayType("video/mp4")) {
         video.setAttribute("src", obj.sample_videos[i].src);
       } else {
         video.setAttribute("src","movie.ogg");
         video.setAttribute("autoPlay","true");
         video.setAttribute("controls","false");
         video.setAttribute("loop","true");
         video.setAttribute("muted","true");
       }
// if video has caption, add caption
      videoDiv.appendChild(video);
      if(obj.sample_videos[i].hasOwnProperty('caption')) {
         var caption = document.createElement('figcaption');
         caption.innerHTML = obj.sample_videos[i].caption;
         videoDiv.appendChild(caption);
      }
// if video has observations, add them to the video div
      if(obj.sample_videos[i].hasOwnProperty('observations')) {
         videoDiv.appendChild(breakDiv);
         var observations = document.createElement('p');
         observations.innerHTML = obj.sample_videos[i].observations; 
         observations.class = 'videoObservations';
         videoDiv.appendChild(observations);
   }
//append video div to content div
   document.getElementById('pageContent').appendChild(videoDiv);
}
}

function populateDocuments(obj) {
   var documentsDiv = document.createElement('div');
   documentsDiv.className = 'documentsFrame';
   documentsDiv.id = 'documentsFrameEl';
   documentsDiv.innerHTML = '<h3>' + 'Sample Documents' + '</h3>'
   for (i=0; i<obj.sample_documents.length; i++) {
      var x = document.createElement('iframe');
      x.setAttribute("src", (obj.sample_documents[i].src+'#view=FitH#toolbar=0'));
      x.setAttribute("scrolling", "no");
      x.setAttribute("frameborder", "0");
      x.setAttribute("allowTransparency", "true");
      x.className = 'sampleDocument';
      documentsDiv.appendChild(x);
}
document.getElementById('pageWrapper').appendChild(documentsDiv);
}

populateSampleData();
makeContentsNav();
//scroll to top of page
window.scrollTo(0,0);

// interactive table of contents

function makeContentsNav() {
   // check what compenents exist for this page
   var data = document.querySelector('.samplesData');
   console.log('data', data);
   var img = document.querySelectorAll('.sampleImage');
   console.log('img', img);
   var video = document.querySelectorAll('videoFrame');
   console.log('video', video);
   var doc = document.querySelectorAll('documentsFrame');
   
   var nav = document.createElement('div');
   nav.id = 'contentsNav';
   nav.className = 'floatingNav';

   // if (x) != 0, add a link to the table of contents
   nav.innerHTML += '<span class="tocTitle">'+data.id+'</span><br>';
   (data) ? nav.innerHTML += '<a id="a_Data">Information</a><br>' : null;
   (img) ? nav.innerHTML += '<a id="a_Images">Images</a><br></bt>' : null;
   (video) ? nav.innerHTML += '<a id="a_Videos">Videos</a><br>' : null;
   (doc) ? nav.innerHTML += '<a id="a_Docs">Documents</a><bt></bt>' : null;
  document.body.insertBefore(nav, document.body.firstChild);
  
   // add event listeners to the links
   document.getElementById('a_Data').addEventListener('click', function() {
      document.getElementById('pageContent').scrollIntoView();
   }
   );
   document.getElementById('a_Images').addEventListener('click', function() {
      document.getElementById('imageFrameEl').scrollIntoView();
   }
   );
   document.getElementById('a_Videos').addEventListener('click', function() {
      document.getElementById('videoFrameEl').scrollIntoView();
   }
   );
   document.getElementById('a_Docs').addEventListener('click', function() {
      document.getElementById('documentsFrameEl').scrollIntoView();
   }
   );
   return (0);
}
