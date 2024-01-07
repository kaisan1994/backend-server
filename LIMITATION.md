1. Frontend client need to actively getting latest draw result.

The frontend need to call api continously in a fixed interval in order to display latest result.
The ideal case would be passively receive update once the draw is done.

Maybe it can achieve by setting up a web socket. Once a draw is done, will notify the frontend and update the UI for latest darw result.