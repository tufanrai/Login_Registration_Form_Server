import mongoose from 'mongoose';
declare const User: mongoose.Model<{
    full_name: string;
    email: string;
    password: string;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    full_name: string;
    email: string;
    password: string;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    full_name: string;
    email: string;
    password: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    full_name: string;
    email: string;
    password: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    full_name: string;
    email: string;
    password: string;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    full_name: string;
    email: string;
    password: string;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default User;
//# sourceMappingURL=user.model.d.ts.map