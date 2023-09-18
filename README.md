# Homework

## UI Automation

- **Framework:** Playwright
- **Language:** TypeScript

Obviously, "Register New User" and "Log In" test scenarios are better, but I faced issues with "not a robot" verification. Probably one of the possible options is to use an existing Google Chrome profile instead of Incognito Mode.

## User API

### Possible Security Risks

<details>
    <summary><b>POST /v1/user/login</b></summary>
    <ul>
        <li>Token doesn’t have an expiration date</li>
        <li>Token doesn’t have roles to which access was granted, e.g. admin/user or read/edit/write or something else</li>
    </ul>
</details>

<details>
    <summary><b>GET /user/items</b></summary>
    <ul>
        <li>It doesn’t matter what is <code>limit</code> value, the response always contains 3 items</li>
        <li>There are no limits for <code>limit</code> value</li>
        <li>There is no verification for authorization token</li>
    </ul>
</details>

<details>
    <summary><b>GET /user/{id}/item</b></summary>
    <ul>
        <li>It doesn’t matter what is <code>id</code> value, the response always returns data for <code>adb9be68-7cf9-4ab3-9c23-b1e349464c98</code>. Potential data leak due to receiving data for a different user</li>
        <li>Response contains password data</li>
        <li>Response contains admin email data</li>
        <li>Response contains <code>content_path</code>, potentially can be used to recreate folders structure on the server</li>
        <li>There is no verification for authorization token</li>
    </ul>
</details>

<details>
    <summary><b>POST /user/item</b></summary>
    <ul>
        <li>Response contains same data as for <code>GET /user/{id}/item</code></li>
        <li>Doesn’t matter what <code>id</code> value is in request, response always returns data for <code>adb9be68-7cf9-4ab3-9c23-b1e349464c98</code>. Potential data leak due to receiving data for a different user</li>
        <li>Response contains password data</li>
        <li>Response contains admin email data</li>
        <li>Response contains <code>content_path</code>, potentially can be used to recreate folders structure on server</li>
        <li>There is no verification for authorization token</li>
    </ul>
</details>

## Bonus

- **Framework:** k6
- **Language:** JavaScript

Very simple performance testing example.
