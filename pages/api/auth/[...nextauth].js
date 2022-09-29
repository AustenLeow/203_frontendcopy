//  import NextAuth from 'next-auth';

//  export default NextAuth({
//     session: {
//         strategy: 'jwt',
//     } ,
//     callbacks:{
//         async jwt({ token, user}) {
//             if (user?._id) token._id = user._id;
//             if (user?._isAdmin) token._isAdmin = user._isAdmin;
//             return token;
//         },
//         async session({ session, token }) {
//             if (user?._id) token._id = user._id;
//             if (user?._isAdmin) token._isAdmin = user._isAdmin;
//             return session;
//         },
//     },

//  });