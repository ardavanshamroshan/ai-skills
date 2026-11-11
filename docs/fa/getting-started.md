# شروع کار

این سایت **مهارت‌های ایجنت AI** را مستند می‌کند: کاربرد، نصب، نمونه پرامپت، و نتیجهٔ مورد انتظار.

## Skill در برابر CLI و Rule

| نوع | یعنی چه | مثال |
| --- | --- | --- |
| **Skill** | دستورالعمل Markdown برای ایجنت | `grill-me` |
| **CLI** | ابزار اجرایی جدا | `ctx7`, `playwright-cli` |
| **Rule** | راهنمای همیشه روشن | `context7.mdc` |
| **Plugin skill** | داخل کش پلاگین Cursor | Postman `api-engineer` |

نصب skill لزوماً CLI را نصب نمی‌کند.

## نصب عمومی

```bash
npx skills@latest add <owner/repo> -g -y -s <skill-name> -a cursor
```

بعد از نصب، **چت جدید** باز کن تا harness مهارت را ببیند.

جزئیات بیشتر و جدول ابزارها: نسخهٔ [English](/getting-started).
