import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})


export class SearchService {
  private apiUrl = 'https://api.openai.com/v1/images/generations'; // URL DALL-E API
  private apiKey = 'sk-0tcdIGiBO-0NTYhWhFtfOTLxAR8OuCQKM4xQndIi1ZT3BlbkFJwedD7A-K9VLgKlTOMOipWSDtq6Dfpr11FTrU2KlLwA'; 
  constructor() { }

  public generateImage(prompt: string, size:string = '1024x1024'): Promise<any> {
    const data = {
      prompt: prompt,
      n: 1,
      size: size
    };

    return axios.post(this.apiUrl, data, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.data);
  }
}
