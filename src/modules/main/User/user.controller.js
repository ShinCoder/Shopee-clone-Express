export default class UserController {
  static getNotification(req, res) {
    const notification = [
      {
        href: '/test',
        data: {
          image:
            'https://down-vn.img.susercontent.com/file/07b48cd255a12f6d06e80bf0fefba28c_tn',
          title: 'Cho Shopee biết thêm nhé!',
          description:
            '📝 Cập nhật đầy đủ thông tin để luôn nhận được các ưu đãi Shopee dành riêng cho bạn! Cập nhật ngay!'
        }
      },
      {
        href: '/',
        data: {
          image:
            'https://down-vn.img.susercontent.com/file/sg-11134004-23030-ilamgz23spov82_tn',
          title: 'FREESHIP ĐƠN 0Đ LẤY NGAY TẠI LIVE',
          description:
            '💕 Thứ 6 mặc đẹp cùng Live ✨ Freeship 0Đ cho mọi đơn thời trang 🔥 Thời trang giảm đến 50% độc quyền 👉 Deal đang chiếm sóng - Vào Live săn ngay!'
        }
      },
      {
        href: '/',
        data: {
          image:
            'https://down-vn.img.susercontent.com/file/sg-11134004-23030-jwm5x45orpovb6_tn',
          title: 'FREESHIP 55.000Đ + DEAL GIẢM 50%',
          description:
            '💕 Thời trang, mỹ phẩm, điện tử sale sốc ✨ Top deal bán chạy chỉ dưới 100.000Đ 👉 Rẻ chất ngất - "Gom" đã tay!'
        }
      },
      {
        href: '/',
        data: {
          image:
            'https://down-vn.img.susercontent.com/file/sg-11134004-23030-tppp27vzrpov13_tn',
          title: 'Kiet LẤY MÃ 30.000Đ Ở ĐÂY NÈ!',
          description:
            '💕 Áp dụng cho đơn bất kì ✨ Bạt ngàn deal sốc giảm 50% 👉 Bạn cần sắm gì? - Click vào mua ngay!'
        }
      },
      {
        href: '/',
        data: {
          image:
            'https://down-vn.img.susercontent.com/file/sg-11134004-23030-d7hdynncqpov0a_tn',
          title: 'VOUCHER XỊN HOÀN ĐẾN 200.000 XU',
          description:
            '🔥 Voucher Hoàn Xu Xtra 🌈 Có sẵn trong Kho Voucher 💥 Hiệu lực 0:00 17/3/2023 - 23:59 23/3/2023  👉 Số lượng có hạn, dùng ngay bạn nhé!'
        }
      }
    ];
    return res.json(notification);
  }
}
