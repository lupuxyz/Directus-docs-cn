# 💬 Frequently Asked Questions

> Below are questions that are commonly asked by people working with Directus. If you can't find an answer, you can post questions to [StackOverflow](https://stackoverflow.com/questions/tagged/directus) or reach out to the members of our [Slack](https://directus.chat) community!

::: warning Premium Support
Due to the enormous number of people using Directus, our Core Team can only provide support to paying Directus Cloud customers or clients who purchase support hours.
:::

## API Queries

### My relational data/file is only returning an ID

Please note the following two things:

1) Directus allows you to request specific field data at different depths. You can use the [`fields` parameter](../api/reference.md#fields) to fetch deeper relationships fields (eg: `?fields=*.*.*` for three levels deep) or even specific fields to keep things as performant as possible (eg: `?fields=image.title` for a relational image's title).

2) Ensure you have the correct correct read permissions for the table your related data is in. By default, Directus makes reading collections private and you will need to enable read permission for the tables you'd like to be able to read.

:::tip
If you're making an unauthenticated request, and you're expecting to see files, you'll need to allow read access to `directus_files` for the `public` role. Be aware, this may allow advanced users to list all files.
:::

## Demos

### I can't login to the demo

We maintain two online demos: [latest release](https://directus.app) (stable) and [latest commit](https://nightly.directus.app) (nightly), to access either of these demos, you can use the credentials: `admin@example.com` and `password`.

Occasionally people may login and change the passwords on these accounts, we're sorry about this, both of our demos reset each hour so if things look a little screwy, please just wait a bit 

## API Tokens

### Can I extend the JWT token?

The JWT Token can't have it's length of validity modified if you need anything more than that, you can either [refresh the token](/api/reference.html#refresh-auth-token) to get a new token, or you can utilise the [Static tokens](/api/reference.html#static-tokens), however, static tokens are less secure.

## Files

### How can I increase the 2MB limit on file uploads?

Directus pulls the file limit based on the upload limit that's configured for your PHP environment. The values you're looking for are `upload_max_filesize` and `post_max_size`. These can both be found in your `php.ini` file.

## Scripts

### Will the bin scripts update all my projects?

Running `bin/directus db:upgrade` will only update your default `_` project. You will need to update your custom projects manually.

## Data Migrations

### Does Directus handle deploying or migrating of content?

When you add data into a database, Directus does not provide any tool for you to migrate or deploy your data changes between different environments (_ie. from development to production_).

## SDKs

### What SDKs are available for Directus?

Currently, the only SDK maintained for Directus 7 is the Javascript-SDK, it's difficult to be Open-Source and maintain multiple SDKs. 

We're hoping for, and awaiting support from the [OpenAPI 3.0 Spec](https://github.com/OAI/OpenAPI-Specification/issues/1706). Giving a thumbs-up could really help! You can, follow the progress of Directus SDK coverage [here](https://github.com/directus/directus/issues/2255).

### Where's the PHP SDK?

_Please see the above..._

When using PHP, we recommend using Guzzle for the time-being and call the [API](/api/reference.html#introduction) directly.

## Errors

### Can't install the database on MariaDB

Some users have noted seeing the following error message: `not able to install database: ./directus install:database SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes`

When you're using MariaDB, though it's based on the same source code as MySQL, there are subtle differences. Directus requires the use of the `utf8mb4` charset. [MariaDB V10.2](https://mariadb.com/kb/en/library/supported-character-sets-and-collations/) or higher will be required for this to work.
