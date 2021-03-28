export class Quote {
  constructor(
    public id: number,
    public author: string,
    public title: string,
    public description: string,
    public createdON: number,
    public upVotes: number,
    public downVotes: number
  ) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.description = description;
    this.createdON = createdON;
    this.upVotes = upVotes;
    this.downVotes = downVotes;
  }
}
