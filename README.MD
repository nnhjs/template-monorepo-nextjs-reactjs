# About
> The tool for managing the monorepo in example project [nextjs](https://nextjs.org/) + [reactjs](https://reactjs.org/) has been extracted out as [Lerna](https://github.com/lerna/lerna)

This is template [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md), it includes:

- 1 package for reactjs
- 1 package for nextjs
- 2 packages commons

## What can monorepo do?
Monorepo allows you to manage more packages in one project. 

Hoisting has a few benefits:

- All packages use the same version of a given dependency
- Can keep dependencies at the root up-to-date with an automated tool such as [Snyk](https://snyk.io/)
- Dependency installation time is reduced
- Less storage is needed

## Installation

```bash
git clone https://github.com/nnhjs/template-monorepo-nextjs-reactjs.git
cd template-monorepo-nextjs-reactjs
npm install 
npm run bootstrap
git remote set-url <this url your github used base>
git push --force
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)