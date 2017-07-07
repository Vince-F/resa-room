import { RoomReservationPage } from './app.po';

describe('room-reservation App', () => {
  let page: RoomReservationPage;

  beforeEach(() => {
    page = new RoomReservationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
