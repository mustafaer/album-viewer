import {environment} from '../../environments/environment';

let serverAddress: string;
serverAddress = environment.baseURL;

export const server = {
  albums: serverAddress + '/albums',
  photos: serverAddress + '/photos',
  comments: serverAddress + '/comments',
};
