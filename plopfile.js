module.exports = (plop) => {
    plop.setGenerator('component', {
      description: 'Create a reusable component',
      prompts: [
        {
          type: 'input',
          name: 'category',
          message:
            'What category of component is it (atoms, molecules, forms, pages, or templates)?',
        },
        {
          type: 'input',
          name: 'name',
          message: 'What is your component name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path:
            'src/components/{{lowerCase category}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/Component/Component.tsx.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{lowerCase category}}/{{pascalCase name}}/{{pascalCase name}}.test.js',
          templateFile: 'plop-templates/Component/Component.test.tsx.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{lowerCase category}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'plop-templates/Component/Component.stories.tsx.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{lowerCase category}}/{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/Component/index.ts.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{lowerCase category}}/{{pascalCase name}}/docs.md',
          templateFile: 'plop-templates/Component/docs.md.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{lowerCase category}}/{{pascalCase name}}/useStyles.ts',
          templateFile: 'plop-templates/Component/useStyles.ts.hbs',
        },
        {
          type: 'add',
          path:
            'src/components/{{lowerCase category}}/{{pascalCase name}}/types.ts',
          templateFile: 'plop-templates/Component/types.ts.hbs',
        },
      ],
    })
  }
  