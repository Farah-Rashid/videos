import axios from "axios";

const KEY =  'AIzaSyCsNY41S2Dfq5RgpWKIt_3JJQi0r0k9Qmo';
 export default axios.create({
     baseURL : 'https://www.googleapis.com/youtube/v3',
     params :{
         part: 'snippet',
         maxResults: 5 ,
         key : KEY
     }
 });