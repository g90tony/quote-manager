import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-grid',
  templateUrl: './quote-grid.component.html',
  styleUrls: ['./quote-grid.component.css'],
})
export class QuoteGridComponent implements OnInit {
  constructor() {}

  addUpVote(index: number) {
    this.quotes[index].upVotes += 1;
  }

  addDownVote(index: number) {
    this.quotes[index].downVotes += 1;
  }

  quotes: Quote[] = [
    {
      id: 1,
      title: 'Greateness',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      upVotes: 10,
      downVotes: 4,
      createdON: 'Sunday, 28 March 2021',
    },
    {
      id: 2,
      title: 'Power',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      upVotes: 20,
      downVotes: 34,
      createdON: 'Sunday, 28 March 2021',
    },
    {
      id: 3,
      title: 'Legacy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      upVotes: 200,
      downVotes: 14,
      createdON: 'Sunday, 28 March 2021',
    },
    {
      id: 3,
      title: 'Humility',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      upVotes: 530,
      downVotes: 140,
      createdON: 'Sunday, 28 March 2021',
    },
  ];

  ngOnInit(): void {}
}
