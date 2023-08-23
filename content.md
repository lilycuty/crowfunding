- JWT (JSON Web Token)
- Authentication/Authorization
  (Authentication: Chứng thực) Khi user sử dụng 1 trang web và muốn sử dụng tính năng của trang web đấy và trang web yêu cầu phải tạo 1 tài khoản -> Liên quan việc chứng thực (Tạo tài khoản, đăng nhập)
  (Authorization: Uỷ quyền) Khi đăng nhập vào rồi có quyền hạn gì có đọc được bài viết đó hay không, sửa, xoá, tạo hay không -> Permission(Gọi chung là Authorization)

- Khi Đăng nhập xong sẽ có 1 ACCESS_TOKEN_SECRET, có 1 thời hạn tuỳ vào việc backend thiết lập. Dựa vào ACCESS_TOKEN để biết thông tin của user
- REFRESH_TOKEN sẽ có thời gian sống lâu hơn ACCESS_TOKEN (Khi user đang đăng nhập ACCESS_TOKEN hết hạn -> Nó sẽ lấy REFRESH_TOKEN ra)

- JWT Gồm 3 phần (Header, Payload, Signature:chữ ký) và được ngăn cách nhau bởi dấu chấm(.)
  +) Header: chứa kiểu dữ liệu và thuật toán sử dụng để mã hoá chuỗi JWT
  +) Payload: Chứa các thông tin của mình (Data)
  +) Signature: mã hoá phần Header và Payload kèm theo một chuỗi secret (Khoá bí mật)
