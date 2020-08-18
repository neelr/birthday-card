# Birthday Card Template

This is a small birthday card template that allows for people to sign cards and customize them.  The backend uses express, the database is mongo, and the frontend uses nextjs and styled components.

To change the theme, change the color pallete in `src/theme/palette.ts`, to change the cover image put the desired image in `public/` and name it `cover_image.png`.

To enable automatic birthday card signings, make a dotenv with the values of the base id and your api token/