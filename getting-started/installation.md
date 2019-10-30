# ⚙️ 安装

> 使用 [Directus 套件](https://github.com/directus/directus)是最快捷简便的方式，在套件中包含了 [Directus API](https://github.com/directus/api)，[Directus App](https://github.com/directus/app)，以及所有的依赖。

## 系统要求

Directus 在 LAMP 技术栈上开发和测试，因此这是唯一的官方支持运行环境。在其他技术栈上（比如 NGINX、Caddy、MariaDB、Percona等等）也能运行，但你需要自己承担潜在风险。务必确保你的服务器符合以下系统要求：

* **Apache**
* **MySQL 5.7+**
    * 一个可用的数据库（空的或者已有数据的都行）
    * 一个可用的数据库用户（用于访问数据库）
* **PHP 7.1+**
    * 扩展:  `pdo`, `mysql`, `curl`, `gd`, `fileinfo`, `libapache2-mod-php` and `mbstring`

::: tip 可选的 SQL 数据库
理论上，Directus 可以使用 MariaDB (`10.2+`) 或 Percona Server 来替代 MySQL。但值得注意的是，这些 *并非* 官方支持方案，你需要自行承担潜在风险。
:::

::: tip 具体的系统要求
浏览[系统要求详情页面](/advanced/requirements.md)了解更多关于系统要求、必要的权限，以及其他服务器相关的预备知识。
:::

## 安装

在服务器命令行工具运行以下 `git` 命令。

```bash
git clone https://github.com/directus/directus.git
```

::: tip 其他安装方式
还可以选择以下安装方式：
* [Docker](/advanced/other-install-methods.md#docker)
* [Zip, Tar, 或 FTP](/advanced/other-install-methods.md#manual)
* [独立安装](/advanced/other-install-methods.md#standalone)
* [源码安装](/advanced/other-install-methods.md#source)
:::

::: tip
如果你在使用 Apache，请确保已启用 `mod_rewrite` 和 `AllowOverride`。[了解更多](/advanced/server-setup.md#apache)
:::

::: tip
安装之后，如果遇到找不到函数或包的错误提示，按照[这些步骤](https://github.com/directus/api/issues/620#issuecomment-449905619)重新创建 `composer.json` 并更新 composer 的自动加载。如果已经存在 `composer.json`，也需要运行 [`composer dump-autoload`](https://getcomposer.org/doc/03-cli.md#dump-autoload-dumpautoload-)。
:::

## 配置

1. 将网站根目录设置为 `/public` 目录
2. 在浏览器中访问 `/admin` 打开管理系统
3. 根据如下提示完成配置

字段          | 描述
:------------- | :-----------
Project Name   | 项目名称The name of your project
Project Key    | 迄今为止，只有 `_` 是有效的
Admin Email    | 管理员邮箱
Admin Password | 管理员密码
Host           | 数据库地址
Port           | 数据库端口（默认3306）
Database User  | 数据库用户名
Database Password | 数据库用户密码
Database Name  | 数据库名称
Database Type  | 数据库类型，目前 Directus 只支持 MySQL

:::tip 手动配置
作为一个可选方式，你可以[手动配置 Directus](/advanced/api/configuration.md).
:::

## 登录

完成安装过程后，将进入登录 Directus App 的页面（url是 `/admin`）。你可以使用前面配置的管理员账号登入协调，或者，如果你是手动配置的，使用默认的账号(账号`admin@example.com` 和密码 `password`)。

---

👍 好了，你已经成功安装了 Directus。现在可以开始[添加你的第一个数据集](/guides/collections.md)了。
