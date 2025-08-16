# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# devConnect-web

1 - Created a Vite + React Application
2 - installed Tailwind
3 - installed daisy UI
4 - Added Navbar Component
5 - Created Component for Navbar -> Navbar.jsx
6 - Installed react-router-dom
7 - Implemented routes
8 - created footer
9 - created Login Page

10 - Insalled Axios
11 - CORS - install CORS middleware in Backend
12 - Add CORS middleware with Configuration : origin, credentials: true // to get Token set in Cookies
13 - In Axios add {withCredential : true} // to get Token set in Cookies

14 - Installed Redux Toolkit and react-redux
15 - ConfiguredStore => CreatedSlic => add Reducer to Store

16 - Token Validation
17 - Created Logout feature

18- created feed page
19 - created edit profile feature
20 - show toast message on updating succes

21 - See all connections in connections.jsx
22 - See all requests in request.jx
23 - Creaeted connection Accept/Reject feature

24 - Created User interested/ignore feature

# Deployment

1 - Signup on AWS
2 - Launch Instance
3 - chmod 400 <secret> . pem
4 - ssh -i command
5 - install node version 22.
6 - git clone (Frontend)

    - npm insall -> in VM
    - npm run build
    - sudo apt udate
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - copy code from dist(build files) to /var/www/html
    - sudo scp -r dist/* /var/www/html
    - Enable port :80 of your instance

7 - git clone (Backend)

    - allowded ec2 instance public IP on mongodb server
    - installed pm2 npm install pm2 -g
    - pm2 start npm --name "devConnect-backend" -- start
    - pm2 list
    - nginx cofig command - sudo nano /etc/nginx/sites-available/default
    - nginx config ->  

        server_name 13.60.66.213;

        location /api/ {
            proxy_pass http://127.0.0.1:7777;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

    - restart nginx - sudo sysetmctl restart nginx

8 - Modify the BASEURL in frontend project to "/api
9 - npm run build
10 - sud scp -r dist/* /var/www/html


Web socket 

